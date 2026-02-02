import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { writingItems } from '@/lib/writing'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

const profileImageSrc = `${import.meta.env.BASE_URL}profile.jpeg`

const contactLinks = [
  { label: 'Email', href: 'mailto:hey@nickmc.io', icon: MailIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nickmcblain',
    icon: LinkedInIcon,
  },
  { label: 'GitHub', href: 'https://github.com/nickmcblain', icon: GitHubIcon },
]

const capabilities = [
  'Product strategy',
  'Design systems',
  'Full-stack engineering',
  'Founder support',
]

const projects = [
  {
    title: 'Lumion',
    url: 'https://trylumion.com',
    urlLabel: 'trylumion.com',
    live: true,
    description:
      'Automation for energy infrastructure developers to accelerate planning and operations with AI agents.',
    tags: ['Energy', 'AI', 'Automation'],
  },
  {
    title: 'Volt.io',
    url: 'https://govolt.io',
    urlLabel: 'govolt.io',
    live: false,
    description:
      'UK EV charging app using DePIN to reward drivers with crypto for sharing public charging behavior.',
    tags: ['EV', 'DePIN', 'Crypto'],
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

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const featuredWriting = writingItems.slice(0, 3)
  const navItems = navLinks.flatMap((link, index) => [
    <a
      key={link.label}
      href={link.href}
      className="transition-colors hover:text-foreground"
    >
      {link.label}
    </a>,
    index < navLinks.length - 1 ? (
      <span key={`${link.label}-sep`} className="text-muted-foreground/60">
        |
      </span>
    ) : null,
  ])

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)',
    ).matches
    const initialTheme =
      stored === 'light' || stored === 'dark'
        ? stored
        : systemPrefersDark
          ? 'dark'
          : 'light'

    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-4">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <img
                src={profileImageSrc}
                alt="Nick McBlain"
                className="h-10 w-10 rounded-sm object-cover"
              />
              <nav className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-6 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {navItems}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'icon-sm' }),
                  'shrink-0',
                )}
              >
                <span className="sr-only">Toggle theme</span>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </header>

        <Separator />

        <main className="flex flex-col gap-16">
          <section
            id="about"
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] mt-12"
          >
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Product Engineer. Founder. Builder.
              </h1>
              <p className="text-sm text-muted-foreground sm:text-base">
                I help teams ship high-signal software by blending product
                strategy, design systems, and engineering. My work leans on
                clarity, obsession with craft, and fast feedback loops.
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'sm' }),
                      'gap-2 text-[0.6rem] uppercase tracking-[0.2em]',
                    )}
                    rel={
                      link.href.startsWith('http') ? 'noreferrer' : undefined
                    }
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <Card>
              <CardHeader className="border-b border-border">
                <CardTitle>Now</CardTitle>
                <CardDescription>
                  What I am focused on right now.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Focus
                  </p>
                  <p className="text-foreground">
                    Energy-tech, AI-workflows, 0-1 products go-to-market.
                  </p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Based
                  </p>
                  <p className="text-foreground">Bristol, UK / New York, US</p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Current favorite tools
                  </p>
                  <p className="text-foreground">
                    <a
                      href="https://openai.com/codex"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Codex
                    </a>
                    ,{' '}
                    <a
                      href="https://zed.dev"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zed
                    </a>
                    ,{' '}
                    <a
                      href="https://granola.so"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Granola
                    </a>
                    ,{' '}
                    <a
                      href="https://www.notion.so"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Notion
                    </a>
                    ,{' '}
                    <a
                      href="https://www.linkedin.com"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    ,{' '}
                    <a
                      href="https://clay.com"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Clay
                    </a>
                    ,{' '}
                    <a
                      href="https://linear.app"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linear
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="projects" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">// Projects</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="border-t border-border">
                    {project.live ? (
                      <a
                        href={project.url}
                        className="text-xs text-muted-foreground underline underline-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.urlLabel}
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground/70">
                        {project.urlLabel}
                      </span>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section id="writing" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">// Writing</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredWriting.map((post) => (
                <Card key={post.title} size="sm">
                  <CardHeader>
                    <CardTitle>
                      <Link
                        to="/writing/$slug"
                        params={{ slug: post.slug }}
                        className="underline underline-offset-4"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{post.slug}</p>
                    <CardDescription>{post.summary}</CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-border text-xs text-muted-foreground">
                    {post.date}
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Link
              to="/writing"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4"
            >
              View all writing
            </Link>
          </section>

          <section id="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  // Let's build something calm and effective.
                </CardTitle>
                <CardDescription>
                  Reach out if you are shipping a product, raising your quality
                  bar, or want to collaborate on new ideas.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2 border-t border-border">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: 'default', size: 'sm' }),
                      'gap-2 text-[0.6rem] uppercase tracking-[0.2em]',
                    )}
                    rel={
                      link.href.startsWith('http') ? 'noreferrer' : undefined
                    }
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                ))}
              </CardFooter>
            </Card>
          </section>
        </main>

        <Separator />

        <footer className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2025 Nick McBlain</span>
          <a href="#about" className="underline underline-offset-4">
            Back to top
          </a>
        </footer>
      </div>
    </div>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="m22 8-9.7 5.4a2 2 0 0 1-1.9 0L2 8" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.4 3H3.6A1.6 1.6 0 0 0 2 4.6v14.8A1.6 1.6 0 0 0 3.6 21h16.8a1.6 1.6 0 0 0 1.6-1.6V4.6A1.6 1.6 0 0 0 20.4 3ZM8.1 18.2H5.4V9.6h2.7ZM6.75 8.4a1.56 1.56 0 1 1 1.56-1.56 1.56 1.56 0 0 1-1.56 1.56ZM18.6 18.2h-2.7v-4.2c0-1-.02-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.7V9.6h2.6v1.2h.04a2.9 2.9 0 0 1 2.6-1.4c2.8 0 3.3 1.8 3.3 4.2Z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.62.07-.6.07-.6 1.02.07 1.56 1.05 1.56 1.05.9 1.56 2.36 1.11 2.94.85.1-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.04-2.7-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.8 1.03a9.5 9.5 0 0 1 5.1 0c1.95-1.3 2.8-1.03 2.8-1.03.55 1.38.2 2.4.1 2.65.65.7 1.04 1.6 1.04 2.7 0 3.85-2.34 4.7-4.57 4.95.36.3.68.9.68 1.84v2.72c0 .26.18.58.68.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}
