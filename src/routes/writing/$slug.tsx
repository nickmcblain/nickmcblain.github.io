import { Link, createFileRoute } from '@tanstack/react-router'
import { SiteFrame } from '@/components/site-frame'
import { WritingTemplate } from '@/components/writing/template'
import { getWritingBySlug } from '@/lib/writing'

export const Route = createFileRoute('/writing/$slug')({
  component: WritingPost,
})

function WritingPost() {
  const { slug } = Route.useParams()
  const post = getWritingBySlug(slug)

  if (!post) {
    return (
      <SiteFrame className="gap-4">
        <p className="text-sm text-muted-foreground">
          That writing piece does not exist yet.
        </p>
        <Link
          to="/writing"
          className="text-sm text-muted-foreground underline underline-offset-4"
        >
          Back to writing
        </Link>
      </SiteFrame>
    )
  }

  return <WritingTemplate post={post} />
}
