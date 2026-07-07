import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import PostCard, { type Post } from "@/components/PostCard";

export const metadata: Metadata = { title: "Writing — Ken Gomes" };

const posts: Post[] = [
  {
    title: "Designing for Low-Bandwidth: Lessons from Building in Africa",
    excerpt:
      "Building React Native apps for markets with inconsistent connectivity forced me to rethink assumptions I had about what a 'normal' network looks like. Here's what changed.",
    tag: "React Native",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
  {
    title: "A/B Testing That Actually Moves the Needle",
    excerpt:
      "A lot of A/B tests I've seen are set up to confirm a hypothesis rather than challenge one. After running dozens of experiments at OmniRetail, here's what I'd do differently.",
    tag: "Product",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
  {
    title: "FlightSuit: What I Learned Maintaining a Design System",
    excerpt:
      "Joining Aviatrix and immediately being handed ownership of FlightSuit was a crash course in everything design systems quietly do for you — and everything they don't.",
    tag: "Design Systems",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
  {
    title: "Using AI Tools to Ship UI Faster (Without Losing Quality)",
    excerpt:
      "Generative AI cut my manual test coverage effort by 30%. But the real unlock wasn't the time saved — it was what that time let me spend on instead.",
    tag: "AI",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Writing"
        subtitle="Notes on frontend engineering, product thinking, and working in growth tech."
      />

      <ul className="flex flex-col gap-4 list-none p-0 m-0">
        {posts.map((post, i) => (
          <li key={post.title}>
            <Reveal delay={i * 75}>
              <PostCard {...post} />
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
