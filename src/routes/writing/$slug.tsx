import { Link, createFileRoute } from "@tanstack/react-router";
import { WritingTemplate } from "@/components/writing/template";
import { getWritingBySlug } from "@/lib/writing";

export const Route = createFileRoute("/writing/$slug")({
  component: WritingPost,
});

function WritingPost() {
  const { slug } = Route.useParams();
  const post = getWritingBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-8">
          <p className="text-sm text-muted-foreground">
            That writing piece does not exist yet.
          </p>
          <Link
            to="/writing"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4"
          >
            Back to writing
          </Link>
        </div>
      </div>
    );
  }

  return <WritingTemplate post={post} />;
}
