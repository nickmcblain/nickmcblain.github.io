import { Link, createFileRoute } from '@tanstack/react-router'
import { SiteFrame } from '@/components/site-frame'
import { trackRecord, workIntro } from '@/lib/site-data'

export const Route = createFileRoute('/work')({ component: WorkPage })

function WorkPage() {
  return (
    <SiteFrame className="gap-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <Link
          to="/"
          className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:decoration-accent-spot"
        >
          Back home
        </Link>
      </div>

      <p className="text-base leading-relaxed text-muted-foreground">
        {workIntro}
      </p>

      <div className="divide-y divide-border border-y border-border">
        {trackRecord.map((item) => (
          <div key={item.org} className="group flex flex-col gap-2 py-4">
            <div className="flex items-start gap-2.5">
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
                  className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:decoration-accent-spot"
                >
                  {new URL(item.url).hostname.replace(/^www\./, '')}
                </a>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.line}
            </p>
          </div>
        ))}
      </div>
    </SiteFrame>
  )
}
