import { Link } from '@tanstack/react-router'
import type { WritingItem } from '@/lib/writing'
import { SiteFrame } from '@/components/site-frame'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArticleArt } from '@/components/writing/article-art'
import { ArticleListen } from '@/components/writing/article-listen'

const contentClasses =
  'space-y-4 text-sm text-muted-foreground leading-relaxed [&>h1]:text-2xl [&>h1]:font-semibold [&>h1]:text-foreground [&>h2]:mt-12 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>li]:my-1 [&>blockquote]:border-l-2 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:text-muted-foreground [&>pre]:overflow-x-auto [&>pre]:rounded-md [&>pre]:bg-muted [&>pre]:p-4 [&_code]:rounded-sm [&_code]:bg-muted/60 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-foreground'

const stripLeadingTitle = (html: string) =>
  html.replace(/^<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, '')

export function WritingTemplate({ post }: { post: WritingItem }) {
  const bodyHtml = stripLeadingTitle(post.html)

  return (
    <SiteFrame className="gap-6">
      <Link
        to="/writing"
        className="text-sm text-muted-foreground underline underline-offset-4"
      >
        Back to writing
      </Link>

      <Card className={post.image ? 'pt-0 text-sm' : 'text-sm'}>
        {post.image ? <ArticleArt src={post.image} alt="" /> : null}
        <CardHeader>
          <CardTitle>{new Date(post.date).toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-foreground">
            {post.title}
          </h1>
          <ArticleListen slug={post.slug} />
          <div
            className={contentClasses}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </CardContent>
      </Card>
    </SiteFrame>
  )
}
