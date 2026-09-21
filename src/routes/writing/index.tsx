import { Link, createFileRoute } from '@tanstack/react-router'
import { SiteFrame } from '@/components/site-frame'
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
    <SiteFrame className="gap-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Point in time thoughts</h1>
        <Link
          to="/"
          className="shrink-0 text-sm text-muted-foreground underline underline-offset-4"
        >
          Back home
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {writingItems.map((post) => (
          <Card key={post.slug} className="group pt-0 text-sm">
            {post.image ? (
              <Link
                to="/writing/$slug"
                params={{ slug: post.slug }}
                aria-label={post.title}
              >
                <ArticleArt src={post.image} alt="" muted />
              </Link>
            ) : null}
            <div className="flex flex-col gap-4">
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
              <CardContent className="text-sm text-muted-foreground">
                {post.date}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </SiteFrame>
  )
}
