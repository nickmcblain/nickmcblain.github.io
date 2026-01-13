import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { WritingItem } from "@/lib/writing";

const contentClasses =
  "space-y-4 text-sm text-muted-foreground leading-relaxed [&>h1]:text-2xl [&>h1]:font-semibold [&>h1]:text-foreground [&>h2]:mt-12 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>li]:my-1 [&>blockquote]:border-l-2 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:text-muted-foreground [&>pre]:overflow-x-auto [&>pre]:rounded-md [&>pre]:bg-muted [&>pre]:p-4 [&_code]:rounded-sm [&_code]:bg-muted/60 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-foreground";

export function WritingTemplate({ post }: { post: WritingItem }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/writing"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4"
          >
            Back to writing
          </Link>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={contentClasses}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
