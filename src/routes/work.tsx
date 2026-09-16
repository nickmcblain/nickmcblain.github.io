import { Link, createFileRoute } from '@tanstack/react-router'
import { trackRecord, workIntro } from '@/lib/site-data'

export const Route = createFileRoute('/work')({ component: WorkPage })

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">
              <span className="text-accent-spot">//</span> Experience
            </h1>
          </div>
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4 transition-colors hover:decoration-accent-spot"
          >
            Back home
          </Link>
        </div>

        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          {workIntro}
        </p>

        <div className="divide-y divide-border border-y border-border">
          {trackRecord.map((item) => (
            <div
              key={item.org}
              className="group grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <div className="flex items-start gap-2.5 self-start">
                <img
                  src={item.logo}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  className="mt-0.5 h-5 w-5 shrink-0 rounded-[3px] grayscale transition group-hover:grayscale-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.org}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:decoration-accent-spot"
                  >
                    {new URL(item.url).hostname.replace(/^www\./, '')}
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{item.line}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
