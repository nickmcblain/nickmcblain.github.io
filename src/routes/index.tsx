import { Link, createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { ArticleArt } from '@/components/writing/article-art'
import { SiteFrame } from '@/components/site-frame'
import { cn } from '@/lib/utils'
import { writingItems } from '@/lib/writing'
import {
  capabilities,
  projects,
  sideProjects,
  stack,
  tools,
} from '@/lib/site-data'

const contactLinks = [
  { label: 'Email', href: 'mailto:hey@nickmc.io', icon: MailIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nickmcblain',
    icon: LinkedInIcon,
  },
  { label: 'GitHub', href: 'https://github.com/nickmcblain', icon: GitHubIcon },
]

const labelClasses = 'text-xs text-muted-foreground'

const inlineLinkClasses =
  'underline underline-offset-4 transition-colors hover:decoration-accent-spot'

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-lg font-semibold">{children}</h2>
}

export const Route = createFileRoute('/')({ component: App })

function App() {
  const featuredWriting = writingItems.slice(0, 3)

  return (
    <SiteFrame>
      <main className="flex flex-col gap-12">
        <section id="about" className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold tracking-tight">
            Product leader. Founder. Engineer.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            11+ years across engineering, growth and product leadership. Today I
            build LLM-powered review agents at Lumion.{' '}
            <Link to="/work" className={inlineLinkClasses}>
              Experience
            </Link>
            .
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
                  'gap-2',
                )}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-t border-border pt-5 text-sm">
            <div>
              <p className={labelClasses}>Focus</p>
              <p>
                RAG agents for energy infrastructure, LLM evals and fine-tuning,
                0-1 go-to-market.
              </p>
            </div>
            <div>
              <p className={labelClasses}>Stack</p>
              <p>{stack}</p>
            </div>
            <div>
              <p className={labelClasses}>Based</p>
              <p>Bristol, UK / New York, US</p>
            </div>
            <div>
              <p className={labelClasses}>Current favorite tools</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <a
                    key={tool.label}
                    href={tool.href}
                    className="group/tool inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs transition-colors hover:border-accent-spot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={tool.icon}
                      alt=""
                      width={14}
                      height={14}
                      loading="lazy"
                      className={cn(
                        'h-3.5 w-3.5 rounded-[2px] object-contain grayscale transition group-hover/tool:grayscale-0',
                        tool.darkInvert && 'dark:invert',
                      )}
                    />
                    {tool.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="startups" className="flex flex-col gap-4">
          <SectionTitle>Startups</SectionTitle>
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <Card key={project.title} className="text-sm">
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
                      className={cn(
                        'text-sm text-muted-foreground',
                        inlineLinkClasses,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.urlLabel}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/70">
                      {project.urlLabel}
                    </span>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="open-source" className="flex flex-col gap-4">
          <SectionTitle>Open source & side projects</SectionTitle>
          <div className="divide-y divide-border border-y border-border">
            {sideProjects.map((project) => (
              <div key={project.title} className="flex flex-col gap-2 py-4">
                {project.url ? (
                  <a
                    href={project.url}
                    className={cn('text-sm font-semibold', inlineLinkClasses)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                ) : (
                  <div>
                    <p className="text-sm font-semibold">{project.title}</p>
                    <p className="text-xs text-muted-foreground/70">
                      Coming soon
                    </p>
                  </div>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="writing" className="flex flex-col gap-4">
          <SectionTitle>Writing</SectionTitle>
          <div className="flex flex-col gap-3">
            {featuredWriting.map((post) => (
              <Card
                key={post.title}
                size="sm"
                className="group text-sm data-[size=sm]:pt-0"
              >
                {post.image ? (
                  <Link
                    to="/writing/$slug"
                    params={{ slug: post.slug }}
                    aria-label={post.title}
                  >
                    <ArticleArt src={post.image} alt="" muted />
                  </Link>
                ) : null}
                <CardHeader>
                  <CardTitle>
                    <Link
                      to="/writing/$slug"
                      params={{ slug: post.slug }}
                      className={inlineLinkClasses}
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
            className={cn('text-sm text-muted-foreground', inlineLinkClasses)}
          >
            View all writing
          </Link>
        </section>

        <section id="contact">
          <Card className="text-sm">
            <CardHeader>
              <CardTitle>Let's build something calm and effective.</CardTitle>
              <CardDescription>
                Reach out if you are building AI products, raising your quality
                bar, or want a second pair of hands on 0-1 strategy.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              I read and ship open source on{' '}
              <a
                href="https://github.com/nickmcblain"
                className={cn('text-foreground', inlineLinkClasses)}
                target="_blank"
                rel="me noreferrer"
              >
                GitHub
              </a>
              .
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t border-border">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'sm' }),
                    'gap-2',
                  )}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
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

      <footer className="flex items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
        <span>© 2026 Nick McBlain</span>
        <a href="#about" className={inlineLinkClasses}>
          Back to top
        </a>
      </footer>
    </SiteFrame>
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
