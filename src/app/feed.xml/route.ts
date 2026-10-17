import { marked } from "marked";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";
import { AUTHOR, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// A literal "]]>" inside post HTML would close the CDATA block early.
function cdata(s: string) {
  return `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

export async function GET() {
  const posts = getPublishedPosts();

  const items = await Promise.all(
    posts.map(async (meta) => {
      const post = getPostBySlug(meta.slug)!;
      const url = `${SITE_URL}/blog/${meta.slug}`;
      const html = await marked(post.content);
      return `
    <item>
      <title>${escapeXml(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(meta.publishDate).toUTCString()}</pubDate>
      <category>${escapeXml(meta.tag)}</category>
      <description>${escapeXml(meta.excerpt)}</description>
      <content:encoded>${cdata(html)}</content:encoded>
      <dc:creator>${escapeXml(AUTHOR.name)}</dc:creator>
    </item>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />${
      posts[0] ? `\n    <lastBuildDate>${new Date(posts[0].publishDate).toUTCString()}</lastBuildDate>` : ""
    }${items.join("")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
