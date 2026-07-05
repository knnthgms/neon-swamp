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
      <h1 className="text-3xl font-bold mb-1" style={{ color: "#e2e8f0" }}>Writing</h1>
      <p className="mb-12 text-sm" style={{ color: "#475569" }}>
        Notes on frontend engineering, product thinking, and working in growth tech.
      </p>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="block rounded-xl p-6 no-underline transition-all"
            style={{
              background: "linear-gradient(135deg, rgba(13,27,54,0.7) 0%, rgba(8,15,30,0.5) 100%)",
              border: "1px solid rgba(45,212,191,0.08)",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(45,212,191,0.22)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(45,212,191,0.08)")}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[0.65rem] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ background: "rgba(45,212,191,0.1)", color: "#2dd4bf" }}
              >
                {post.tag}
              </span>
              <span className="text-xs" style={{ color: "#334155" }}>{post.date}</span>
              {post.draft && (
                <span
                  className="text-[0.65rem] font-semibold px-2 py-0.5 rounded"
                  style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24" }}
                >
                  Draft
                </span>
              )}
            </div>
            <h2 className="text-base font-semibold mb-1.5" style={{ color: "#cbd5e1" }}>{post.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{post.excerpt}</p>
          </a>
        ))}
      </div>
      <p
        className="mt-12 text-center text-sm rounded-xl py-6"
        style={{ color: "#334155", border: "1px dashed rgba(45,212,191,0.1)" }}
      >
        Posts are in progress — check back soon.
      </p>
    </>
  );
}
