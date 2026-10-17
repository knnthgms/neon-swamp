import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import PostCard from "@/components/PostCard";
import { getBlogListPosts, isLive } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Ken Gomes",
  description: "Notes on frontend engineering, product thinking, and working in growth tech.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getBlogListPosts();

  return (
    <>
      <PageHeader
        title="Writing"
        subtitle="Notes on frontend engineering, product thinking, and working in growth tech."
      />

      <ul className="flex flex-col gap-4 list-none p-0 m-0">
        {posts.map((post, i) => (
          <li key={post.slug}>
            <Reveal delay={i * 75}>
              <PostCard
                {...post}
                href={isLive(post) ? `/blog/${post.slug}` : undefined}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={posts.length * 75}>
        <p
          className="mt-12 text-center text-sm rounded-xl py-6"
          style={{ color: "#334155", border: "1px dashed rgba(45,212,191,0.1)" }}
        >
          Posts are in progress — check back soon.
        </p>
      </Reveal>
    </>
  );
}
