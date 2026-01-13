import { marked } from "marked";

marked.use({
  gfm: true,
  breaks: false,
  headerIds: false,
  mangle: false,
});

export const markdownToHtml = (markdown: string) =>
  marked.parse(markdown) as string;
