import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import ProjectCard, { type Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Ken Gomes",
  description: "Side projects by Ken Gomes: native macOS and iOS apps in Swift, and web apps you can try live.",
  alternates: { canonical: "/projects" },
};

const GH = "https://github.com/knnthgms";

const apps: Project[] = [
  {
    name: "Looking Glass",
    tagline: "A menu bar mirror for macOS that also takes polaroids",
    desc: "A live camera mirror that grows out of the MacBook notch, pins as a floating window over calls, and snaps framed photos with seven caption styles. Every icon is drawn in code, and an offscreen self-test renders the whole UI without a camera.",
    stack: ["Swift", "AppKit", "SwiftUI", "AVFoundation"],
    image: { src: "/projects/looking-glass.jpg", width: 1200, height: 980, alt: "Looking Glass mirror window with its settings drawer open" },
    links: [
      { label: "Download for Mac", href: `${GH}/looking-glass/releases/latest`, primary: true },
      { label: "GitHub", href: `${GH}/looking-glass` },
    ],
  },
  {
    name: "Tally",
    tagline: "A notepad calculator for macOS",
    desc: "Type maths in plain language and answers appear alongside: units, live currency and crypto rates, dates, time zones and percentages. Built on a hand-written lexer, parser and evaluator with no UI dependency, covered by XCTest.",
    stack: ["Swift", "SwiftUI", "AppKit", "XCTest"],
    image: { src: "/projects/tally.jpg", width: 1200, height: 809, alt: "Tally showing a trip budget with currency conversion, time zones and units" },
    links: [
      { label: "Download for Mac", href: `${GH}/tally/releases/latest`, primary: true },
      { label: "GitHub", href: `${GH}/tally` },
    ],
  },
  {
    name: "Siprup",
    tagline: "An iOS hydration log where the screen is a glass",
    desc: "Each drink pours in as its own band of liquid, with caustic light from a Metal shader, rising bubbles, and a surface that sloshes as you tilt the phone. History, goals and reminders are stored locally with SwiftData.",
    stack: ["SwiftUI Canvas", "Metal", "SwiftData", "Swift Charts", "CoreMotion"],
    image: { src: "/projects/siprup.jpg", width: 413, height: 900, alt: "Siprup home screen filled with layered drinks", phone: true },
    links: [{ label: "GitHub", href: `${GH}/siprup`, primary: true }],
  },
];

const web: Project[] = [
  {
    name: "Wordgrove",
    tagline: "Three quiet word games, offline-first",
    desc: "Word search, a clue-based word builder, and a pass-and-play party game in one calm app. No account, no ads, no tracking. Built for Android first, and the same code runs in the browser.",
    stack: ["Expo", "React Native", "TypeScript", "Expo Router"],
    image: { src: "/projects/wordgrove.jpg", width: 416, height: 900, alt: "Wordgrove home screen listing the three games", phone: true },
    links: [{ label: "Play the demo", href: "https://wordgrove.knnthgms.workers.dev", primary: true }],
  },
  {
    name: "Curvy Noodle",
    tagline: "Storefront and blog for a handmade sticker shop",
    desc: "A fast, mobile-first shop with a blog and a built-in admin editor, so the owner can update products and posts without touching code.",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    image: { src: "/projects/curvy-noodle.jpg", width: 1200, height: 750, alt: "Curvy Noodle home page with sticker illustrations" },
    links: [
      { label: "Visit site", href: "https://curvynoodle.com", primary: true },
      { label: "GitHub", href: `${GH}/curvy-noodle-store` },
    ],
  },
  {
    name: "Natasha Gomes",
    tagline: "Portfolio for a product marketer",
    desc: "A portfolio and case-study site focused on go-to-market and lifecycle marketing work, statically exported and hosted on Cloudflare Pages.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: { src: "/projects/natasha-gomes.jpg", width: 1200, height: 750, alt: "Natasha Gomes portfolio home page" },
    links: [
      { label: "Visit site", href: "https://natasha-gomes-portfolio.pages.dev", primary: true },
      { label: "GitHub", href: `${GH}/natasha-gomes-portfolio` },
    ],
  },
];

function Group({ title, projects, offset }: { title: string; projects: Project[]; offset: number }) {
  const id = `group-${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <section className="mb-14" aria-labelledby={id}>
      <h2
        id={id}
        className="text-[0.65rem] font-bold uppercase tracking-widest mb-4"
        style={{ color: "#1e3a5f", letterSpacing: "0.1em" }}
      >
        {title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(offset + i) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Things I build outside work: native Apple apps in Swift, and web apps you can try right now."
      />
      <Group title="Mac & iOS apps" projects={apps} offset={0} />
      <Group title="On the web" projects={web} offset={apps.length} />
    </>
  );
}
