import type { Metadata } from "next";

export const metadata: Metadata = { title: "Writing — Ken Gomes" };

const posts = [
  {
    title: "Designing for Low-Bandwidth: Lessons from Building in Africa",
    excerpt: "Building React Native apps for markets with inconsistent connectivity forced me to rethink assumptions I had about what a 'normal' network looks like. Here's what changed.",
    tag: "React Native",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
  {
    title: "A/B Testing That Actually Moves the Needle",
    excerpt: "A lot of A/B tests I've seen are set up to confirm a hypothesis rather than challenge one. After running dozens of experiments at OmniRetail, here's what I'd do differently.",
    tag: "Product",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
  {
    title: "FlightSuit: What I Learned Maintaining a Design System",
    excerpt: "Joining Aviatrix and immediately being handed ownership of FlightSuit was a crash course in everything design systems quietly do for you — and everything they don't.",
    tag: "Design Systems",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
  {
    title: "Using AI Tools to Ship UI Faster (Without Losing Quality)",
    excerpt: "Generative AI cut my manual test coverage effort by 30%. But the real unlock wasn't the time saved — it was what that time let me spend on instead.",
    tag: "AI",
    date: "Coming soon",
    draft: true,
    href: "#",
  },
];

export default function Blog() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#befcae] mb-1">Writing</h1>
      <p className="text-[#abe39d] mb-12 text-sm">
        Notes on frontend engineering, product thinking, and working in growth tech.
      </p>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="block border border-[rgba(190,252,174,0.12)] rounded-xl p-6 no-underline transition-colors hover:border-[rgba(190,252,174,0.35)] hover:bg-[rgba(190,252,174,0.04)]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[0.7rem] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-[rgba(190,252,174,0.12)] text-[#befcae]">
                {post.tag}
              </span>
              <span className="text-xs text-[#abe39d] opacity-60">{post.date}</span>
              {post.draft && (
                <span className="text-[0.7rem] font-semibold px-2 py-0.5 rounded bg-[rgba(255,189,68,0.15)] text-[#ffbd44]">
                  Draft
                </span>
              )}
            </div>
            <h2 className="text-base font-semibold text-[#befcae] mb-1">{post.title}</h2>
            <p className="text-sm text-[#abe39d] leading-relaxed opacity-80">{post.excerpt}</p>
          </a>
        ))}
      </div>
      <p className="mt-12 text-center text-sm text-[#abe39d] opacity-50 border border-dashed border-[rgba(190,252,174,0.2)] rounded-xl py-6">
        Posts are in progress — check back soon.
      </p>
    </>
  );
}
