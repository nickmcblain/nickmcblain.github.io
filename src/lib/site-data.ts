export const capabilities = [
  'AI agents & LLM products',
  'RAG & evals',
  'Product strategy',
  'Growth & A/B testing',
  'Full-stack engineering',
  'Technical leadership',
]

export const stack =
  'TypeScript, Python, React, Bun, AWS/GCP, Kubernetes, CI/CD, PostHog observability'

const toolIcon = (name: string) =>
  `${import.meta.env.BASE_URL}tools/${name}.png`

export const tools = [
  { label: 'Cursor', href: 'https://cursor.com', icon: toolIcon('cursor') },
  {
    label: 'Claude Code',
    href: 'https://claude.com/product/claude-code',
    icon: toolIcon('claude-code'),
  },
  { label: 'Codex', href: 'https://openai.com/codex', icon: toolIcon('codex') },
  { label: 'Bun', href: 'https://bun.sh', icon: toolIcon('bun') },
  { label: 'Granola', href: 'https://granola.so', icon: toolIcon('granola') },
  { label: 'Linear', href: 'https://linear.app', icon: toolIcon('linear') },
  { label: 'Clay', href: 'https://clay.com', icon: toolIcon('clay') },
  { label: 'PostHog', href: 'https://posthog.com', icon: toolIcon('posthog') },
]

export type Project = {
  title: string
  url: string
  urlLabel: string
  live: boolean
  description: string
  tags: Array<string>
}

export const projects: Array<Project> = [
  {
    title: 'Lumion',
    url: 'https://trylumion.com',
    urlLabel: 'trylumion.com',
    live: true,
    description: 'AI interconnection compliance for U.S. energy developers',
    tags: ['AI agents', 'RAG', 'Energy'],
  },
  {
    title: 'Volt.io',
    url: 'https://govolt.io',
    urlLabel: 'govolt.io',
    live: false,
    description:
      'AI-powered EV route and charging planner for iOS, built on a weekly-refreshed public charging dataset.',
    tags: ['AI', 'EV', 'iOS'],
  },
  {
    title: 'Orton.io',
    url: 'https://orton.io',
    urlLabel: 'orton.io',
    live: true,
    description:
      'Platform and community that helps writers become authors, from idea to audience.',
    tags: ['Publishing', 'Community', 'Platform'],
  },
  {
    title: 'DonateDoughnut',
    url: 'https://donatedoughnut.com',
    urlLabel: 'donatedoughnut.com',
    live: true,
    description:
      'Simple, modern giving platform that streamlines charitable donations.',
    tags: ['Nonprofit', 'Giving', 'Platform'],
  },
]

export type SideProject = {
  title: string
  url?: string
  description: string
  tags: Array<string>
}

export const sideProjects: Array<SideProject> = [
  {
    title: 'GreenerGrass',
    url: 'https://uk-ai.greenergrass.careers/',
    description:
      'Job board for helping people in the UK find AI roles and improve their CV.',
    tags: ['AI jobs', 'UK', 'Platform'],
  },
  {
    title: 'Gump',
    description:
      'Native iOS and macOS inbox for people leaving Notion Mail. Snippets, AI auto-label, schedule send, booking links, send-separately. Gmail and Outlook stay the source of truth.',
    tags: ['Swift', 'iOS', 'macOS'],
  },
  {
    title: 'Surge',
    description: 'TUI-themed desktop app for energy traders.',
    tags: ['TUI', 'Desktop', 'Energy'],
  },
  {
    title: 'pdfx',
    url: 'https://github.com/nickmcblain/pdfx',
    description:
      'Rust CLI that shrinks PDFs with hand-written DEFLATE and JPEG encoders. Emits only filters normal viewers already know; never returns a bigger file.',
    tags: ['Rust', 'CLI', 'Codecs'],
  },
  {
    title: 'Scrunch',
    description:
      'iOS-first Expo app for logging feeds and nappies. One shared timeline for both parents, synced through Convex.',
    tags: ['Expo', 'Convex', 'iOS'],
  },
]

export const workIntro =
  'Before Lumion I led cross-functional product and engineering teams at Capital One, BT and StudentFinance. I care about clarity, craft, and fast feedback loops.'

export type TrackRecordItem = {
  org: string
  logo: string
  url: string
  line: string
}

const orgLogo = (name: string) => `${import.meta.env.BASE_URL}orgs/${name}.png`

export const trackRecord: Array<TrackRecordItem> = [
  {
    org: 'Lumion',
    logo: orgLogo('lumion'),
    url: 'https://trylumion.com/',
    line: 'Built a retrieval-augmented LLM review platform with an eval harness. Detects 90% of admin deficiencies across 20+ real interconnection packages. Pilots with Shell and TotalEnergies; led a $350K pre-seed. Evaluated PyTorch LSTM vs XGBoost vs GenAI forecasting.',
  },
  {
    org: 'BT Group',
    logo: orgLogo('bt'),
    url: 'https://business.bt.com/',
    line: 'Led four PMs and two engineering teams across a ~100-person Experience Platform tribe. Shipped an AI support chatbot and rebuilt the design system behind the BT Business site.',
  },
  {
    org: 'StudentFinance',
    logo: orgLogo('studentfinance'),
    url: 'https://www.studentfinance.com/uk',
    line: 'Sole PM through a €39M Series A. Grew account bookings 115%+ and cut credit scoring from 13 days to 2.',
  },
  {
    org: 'Capital One',
    logo: orgLogo('capital-one'),
    url: 'https://www.capitalone.co.uk/',
    line: 'Growth lead for a 40+ engineer org, coached six PMs, +3pp QuickCheck conversion. Earlier led the on-prem to AWS acquisition strategy (£2.5M saved) and was the youngest Principal Engineer.',
  },
  {
    org: 'Alike',
    logo: orgLogo('alike'),
    url: 'https://alike.org.uk/',
    line: 'Redesigned and relaunched the iOS and Android app. +300% uptake, ~50% retention lift.',
  },
]
