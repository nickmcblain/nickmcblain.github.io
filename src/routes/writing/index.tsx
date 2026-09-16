import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArticleArt } from '@/components/writing/article-art'
import { writingItems } from '@/lib/writing'

export const Route = createFileRoute('/writing/')({ component: WritingIndex })

function WritingIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Point in time thoughts</h1>
          </div>
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4"
          >
            Back home
          </Link>
        </div>

        <div className="grid gap-4">
          {writingItems.map((post) => (
            <Card
              key={post.slug}
              className="group pt-0 md:grid md:grid-cols-[16rem_1fr] md:gap-2"
            >
              {post.image ? (
                <Link
                  to="/writing/$slug"
                  params={{ slug: post.slug }}
                  aria-label={post.title}
                  className="md:-mb-4 md:h-[calc(100%+1rem)]"
                >
                  <ArticleArt
                    src={post.image}
                    alt=""
                    muted
                    className="md:aspect-auto md:h-full"
                  />
                </Link>
              ) : null}
              <div className="flex flex-col gap-4 md:pt-4">
                <CardHeader>
                  <CardTitle>
                    <Link
                      to="/writing/$slug"
                      params={{ slug: post.slug }}
                      className="underline underline-offset-4 transition-colors hover:decoration-accent-spot"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{post.slug}</p>
                  <CardDescription>{post.summary}</CardDescription>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  {post.date}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
