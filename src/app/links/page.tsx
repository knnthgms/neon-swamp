import type { Metadata } from "next";

export const metadata: Metadata = { title: "Links — Ken Gomes" };

const sections = [
  {
    title: "Frontend & Engineering",
    links: [
      { title: "Josh W. Comeau — CSS for JavaScript Developers", desc: "The best resource I've found for really understanding CSS — not just cargo-culting it.", href: "https://www.joshwcomeau.com" },
      { title: "web.dev", desc: "Google's engineering guides on performance, accessibility, and modern web APIs.", href: "https://web.dev" },
      { title: "Smashing Magazine", desc: "Consistently good long-form on frontend patterns, UX, and tooling.", href: "https://www.smashingmagazine.com" },
      { title: "Kent C. Dodds — Epic React", desc: "Kent's mental models for React are the clearest I've encountered.", href: "https://epicreact.dev" },
    ],
  },
  {
    title: "Design & Systems",
    links: [
      { title: "Refactoring UI", desc: "The book that changed how I think about visual design decisions as an engineer.", href: "https://www.refactoringui.com" },
      { title: "Linear Blog", desc: "Product and design writing from one of the most thoughtfully-built tools out there.", href: "https://linear.app/blog" },
      { title: "Storybook Blog", desc: "Component-driven UI patterns and design system best practices.", href: "https://storybook.js.org/blog" },
    ],
  },
  {
    title: "Product & Growth",
    links: [
      { title: "Lenny's Newsletter", desc: "The most consistently useful product thinking I've found in a newsletter.", href: "https://www.lennysnewsletter.com" },
      { title: "Reforge Blog", desc: "Deep frameworks for product growth — especially useful if you work at the engineering/product boundary.", href: "https://www.reforge.com/blog" },
      { title: "The Pragmatic Engineer", desc: "Gergely Orosz on how engineering actually works inside large companies.", href: "https://blog.pragmaticengineer.com" },
    ],
  },
  {
    title: "Tools I Use",
    links: [
      { title: "ray.so", desc: "Beautiful code screenshots. I use this constantly for sharing snippets.", href: "https://ray.so" },
      { title: "Excalidraw", desc: "My go-to for quick architecture diagrams and whiteboarding.", href: "https://excalidraw.com" },
      { title: "Warp Terminal", desc: "The terminal I've been using daily — the AI command search alone makes it worth it.", href: "https://www.warp.dev" },
    ],
  },
];

export default function Links() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#befcae] mb-1">Links</h1>
      <p className="text-[#abe39d] mb-12 text-sm">
        Things I&apos;m reading, tools I use, and corners of the internet I keep returning to. Updated irregularly.
      </p>
      {sections.map((section) => (
        <div key={section.title} className="mb-10">
          <h2 className="text-[0.7rem] font-bold uppercase tracking-widest text-[#befcae] opacity-50 mb-4">
            {section.title}
          </h2>
          <div className="flex flex-col gap-2">
            {section.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-0.5 px-4 py-3 rounded-lg border border-[rgba(190,252,174,0.1)] no-underline transition-colors hover:border-[rgba(190,252,174,0.3)] hover:bg-[rgba(190,252,174,0.04)]"
              >
                <span className="text-sm font-medium text-[#befcae]">{link.title}</span>
                <span className="text-xs text-[#abe39d] opacity-65">{link.desc}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
      <p className="text-right text-xs text-[#abe39d] opacity-40 mt-8">Last updated June 2025</p>
    </>
  );
}
