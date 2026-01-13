import { markdownToHtml } from "@/lib/markdown";

export type WritingItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
  html: string;
};

type Frontmatter = {
  title?: string;
  summary?: string;
  date?: string;
};

const writingModules = import.meta.glob<string>(
  "../content/writing/*.md",
  {
    as: "raw",
    eager: true,
  }
);

const parseFrontmatter = (raw: string) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const frontmatter = match[1];
  const content = raw.slice(match[0].length);
  const data: Frontmatter = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    const cleanValue = value.replace(/^"(.*)"$/, "$1");

    if (key === "title") data.title = cleanValue;
    if (key === "summary") data.summary = cleanValue;
    if (key === "date") data.date = cleanValue;
  }

  return { data, content };
};

export const writingItems: WritingItem[] = Object.entries(writingModules)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "untitled";
    const { data, content } = parseFrontmatter(raw);
    const title = data.title ?? slug;
    const summary = data.summary ?? "";
    const date = data.date ?? "";
    const trimmedContent = content.trim();
    const html = markdownToHtml(trimmedContent);

    return {
      slug,
      title,
      summary,
      date,
      content: trimmedContent,
      html,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const getWritingBySlug = (slug: string) =>
  writingItems.find((item) => item.slug === slug);
