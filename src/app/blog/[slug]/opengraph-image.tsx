import { ImageResponse } from "next/og";
import OgCard, { OG_SIZE } from "@/components/OgCard";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";

export const alt = "Blog post by Ken Gomes";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return new ImageResponse(
    <OgCard eyebrow={post?.tag ?? "Writing"} title={post?.title ?? "Ken Gomes"} />,
    size
  );
}
