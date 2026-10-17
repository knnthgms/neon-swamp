import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  publishDate: string; // "YYYY-MM-DD"
  draft: boolean;
};

export type Post = PostMeta & {
  content: string; // raw Markdown
};

function parsePost(filename: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug ?? filename.replace(/\.md$/, ""),
    title: data.title,
    excerpt: data.excerpt,
    tag: data.tag,
    publishDate: data.publishDate,
    draft: data.draft ?? false,
    content,
  };
}

function byDateDesc(a: Post, b: Post) {
  return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parsePost)
    .sort(byDateDesc);
}

export function isLive(post: PostMeta, now = new Date()) {
  return !post.draft && new Date(post.publishDate) <= now;
}

// Live posts first (newest first), then upcoming teasers (soonest first)
export function getBlogListPosts(): PostMeta[] {
  const all = getAllPosts().map(({ content: _content, ...meta }) => meta);
  const live = all.filter((p) => isLive(p));
  const upcoming = all.filter((p) => !isLive(p)).reverse();
  return [...live, ...upcoming];
}

export function getPublishedPosts(): PostMeta[] {
  return getBlogListPosts().filter((p) => isLive(p));
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
