import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { writingItems } from '@/lib/writing'

export const Route = createFileRoute('/writing/')({ component: WritingIndex })

function WritingIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Writing
            </p>
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
            <Card key={post.slug}>
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
              <CardContent className="text-xs text-muted-foreground">
                {post.date}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
