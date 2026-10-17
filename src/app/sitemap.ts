import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import { LAB_ENABLED } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/blog", "/links", ...(LAB_ENABLED ? ["/lab"] : [])].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const posts = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishDate,
  }));

  return [...pages, ...posts];
}
