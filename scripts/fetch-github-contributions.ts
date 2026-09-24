import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const usernames = ['nickmcblain', 'nickmc-lumion'] as const
const year = new Date().getFullYear()

type ContributionDay = {
  date: string
  count: number
  level: number
}

type ProfileContributions = {
  username: string
  total: number
  contributions: ContributionDay[]
}

type GitHubContributionsFile = {
  fetchedAt: string
  year: number
  profiles: ProfileContributions[]
}

const outputPath = join(
  process.cwd(),
  'src/generated/github-contributions.json',
)

async function fetchProfile(username: string): Promise<ProfileContributions> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`,
    {
      headers: {
        'Cache-Control': 'no-cache',
      },
    },
  )

  if (!response.ok) {
    throw new Error(
      `Failed to fetch contributions for ${username}: ${response.status}`,
    )
  }

  const payload = (await response.json()) as {
    total: Record<string, number>
    contributions: ContributionDay[]
  }

  const total = payload.total[String(year)]
  if (total === undefined) {
    throw new Error(`Missing contribution total for ${username} in ${year}`)
  }

  return {
    username,
    total,
    contributions: payload.contributions,
  }
}

const profiles = await Promise.all(usernames.map(fetchProfile))

const file: GitHubContributionsFile = {
  fetchedAt: new Date().toISOString(),
  year,
  profiles,
}

await mkdir(join(process.cwd(), 'src/generated'), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(file, null, 2)}\n`)

console.log(
  `Wrote ${outputPath} (${profiles.map((p) => `${p.username}: ${p.total}`).join(', ')})`,
)
