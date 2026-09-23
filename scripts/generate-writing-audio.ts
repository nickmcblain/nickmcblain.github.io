import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const apiKey = process.env.ELEVENLABS_API_KEY
const voiceId = process.env.ELEVENLABS_VOICE_ID ?? '21m00Tcm4TlvDq8ikWAM'
const modelId = process.env.ELEVENLABS_MODEL_ID ?? 'eleven_multilingual_v2'
const chunkLimit = 8000
const preview = process.argv.includes('--preview')

const writingDir = join(process.cwd(), 'src/content/writing')
const audioDir = join(process.cwd(), 'public/audio')

if (!apiKey && !preview) {
  console.log('ELEVENLABS_API_KEY missing. Skipping audio generation.')
  process.exit(0)
}

const files = (await readdir(writingDir)).filter((file) => file.endsWith('.md'))
const slugs: Array<string> = []

if (!preview) await mkdir(audioDir, { recursive: true })

for (const file of files) {
  const slug = file.replace(/\.md$/, '')
  const raw = await readFile(join(writingDir, file), 'utf8')
  const speech = toSpeechText(stripFrontmatter(raw))
  if (preview) {
    console.log(`\n--- ${slug} ---\n`)
    console.log(speech)
    continue
  }

  if (!apiKey) continue

  const chunks = chunkText(speech, chunkLimit)
  const parts: Array<Uint8Array> = []

  for (let index = 0; index < chunks.length; index += 1) {
    const text = chunks[index]
    if (!text) continue
    parts.push(
      await synthesize({
        apiKey,
        voiceId,
        modelId,
        text,
        previousText: chunks[index - 1],
        nextText: chunks[index + 1],
      }),
    )
  }

  await writeFile(join(audioDir, `${slug}.mp3`), concatBytes(parts))
  slugs.push(slug)
  console.log(
    `Wrote audio for ${slug} (${chunks.length} part${chunks.length === 1 ? '' : 's'})`,
  )
}

if (!preview) {
  await writeFile(
    join(audioDir, 'manifest.json'),
    `${JSON.stringify({ slugs }, null, 2)}\n`,
  )
}

function stripFrontmatter(raw: string) {
  const match = raw.match(/^---\n[\s\S]*?\n---\n?/)
  return match ? raw.slice(match[0].length) : raw
}

function toSpeechText(markdown: string) {
  const source = markdown
    .replace(/```[^\n]*\n([\s\S]*?)```/g, (_, inner: string) => {
      const spoken = inner.trim().replace(/\s*\n\s*/g, ' ')
      return spoken ? `\n\n${spoken}\n\n` : '\n\n'
    })
    .replace(/!\[[^\]]*]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')

  const blocks: Array<string> = []
  let paragraph: Array<string> = []
  let list: Array<string> = []

  const flushParagraph = () => {
    if (!paragraph.length) return
    const text = stripInline(paragraph.join(' '))
    if (text) blocks.push(text)
    paragraph = []
  }

  const flushList = () => {
    if (!list.length) return
    blocks.push(speakList(list))
    list = []
  }

  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }

    if (/^#{1,6}\s+/.test(trimmed)) {
      flushParagraph()
      flushList()
      continue
    }

    const item = trimmed.match(/^[-*]\s+(.*)/)
    if (item?.[1]) {
      flushParagraph()
      const spoken = stripInline(item[1])
      if (spoken) list.push(spoken)
      continue
    }

    flushList()
    paragraph.push(trimmed)
  }

  flushParagraph()
  flushList()

  return joinForSpeech(blocks)
}

function stripInline(text: string) {
  return text
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function speakList(items: Array<string>) {
  const cleaned = items.map((item) => item.replace(/\.$/, ''))
  if (cleaned.length === 1) return endSentence(cleaned[0] ?? '')
  const head = cleaned.slice(0, -1).join(', ')
  return endSentence(`${head}, and ${cleaned[cleaned.length - 1] ?? ''}`)
}

function endSentence(text: string) {
  return /[.!?]$/.test(text) ? text : `${text}.`
}

function joinForSpeech(blocks: Array<string>) {
  const merged: Array<string> = []
  let current = ''

  for (const block of blocks) {
    const next = current ? `${current} ${block}` : block
    if (current && next.length > 700) {
      merged.push(current)
      current = block
    } else {
      current = next
    }
  }

  if (current) merged.push(current)
  return merged.join('\n\n')
}

function chunkText(text: string, limit: number) {
  const paragraphs = text.split(/\n\n+/).map((paragraph) => paragraph.trim())
  const chunks: Array<string> = []
  let current = ''

  for (const paragraph of paragraphs) {
    if (!paragraph) continue

    if (paragraph.length > limit) {
      if (current) {
        chunks.push(current)
        current = ''
      }
      for (let index = 0; index < paragraph.length; index += limit) {
        chunks.push(paragraph.slice(index, index + limit))
      }
      continue
    }

    const next = current ? `${current}\n\n${paragraph}` : paragraph
    if (next.length > limit) {
      chunks.push(current)
      current = paragraph
    } else {
      current = next
    }
  }

  if (current) chunks.push(current)
  return chunks
}

async function synthesize({
  apiKey: key,
  voiceId: voice,
  modelId: model,
  text,
  previousText,
  nextText,
}: {
  apiKey: string
  voiceId: string
  modelId: string
  text: string
  previousText?: string
  nextText?: string
}) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': key,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: model,
      previous_text: previousText,
      next_text: nextText,
    }),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`ElevenLabs ${response.status}: ${detail}`)
  }

  return new Uint8Array(await response.arrayBuffer())
}

function concatBytes(parts: Array<Uint8Array>) {
  const total = parts.reduce((sum, part) => sum + part.length, 0)
  const output = new Uint8Array(total)
  let offset = 0
  for (const part of parts) {
    output.set(part, offset)
    offset += part.length
  }
  return output
}
