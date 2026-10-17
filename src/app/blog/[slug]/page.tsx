import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getPostBySlug, getPostStaticParams, isLive } from "@/lib/posts";
import { AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Only slugs returned by generateStaticParams exist, so scheduled posts 404 on static hosting.
export const dynamicParams = false;

export async function generateStaticParams() {
  return getPostStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.excerpt,
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      siteName: SITE_NAME,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishDate,
      authors: [AUTHOR.name],
      tags: [post.tag],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// "<" is escaped so a post title can never close the surrounding <script> tag.
function jsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isLive(post)) notFound();

  const html = await marked(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    keywords: post.tag,
    author: { "@type": "Person", ...AUTHOR },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[0.65rem] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
            style={{ background: "rgba(45,212,191,0.1)", color: "#2dd4bf" }}
          >
            {post.tag}
          </span>
          <time dateTime={post.publishDate} className="text-xs" style={{ color: "#94a3b8" }}>
            {formatDate(post.publishDate)}
          </time>
        </div>

        <h1 className="text-3xl font-bold leading-tight mb-4" style={{ color: "#e2e8f0" }}>
          {post.title}
        </h1>

        <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
          {post.excerpt}
        </p>
      </header>

      <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />

      <footer className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(45,212,191,0.08)" }}>
        <Link href="/blog" className="text-sm no-underline" style={{ color: "#2dd4bf" }}>
          ← Back to writing
        </Link>
      </footer>
    </article>
  );
}
