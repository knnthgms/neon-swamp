# neon-swamp

Personal site for [Ken Gomes](https://kengomes.pages.dev) — built with Next.js 16, Tailwind CSS v4, and no animation libraries.

**Live:** https://kengomes.pages.dev

## Stack

- **Next.js 16** — App Router, Turbopack, maximised server rendering
- **Tailwind CSS v4** — utility classes; global CSS for keyframes and custom properties
- **Geist Sans + Geist Mono** — via `next/font/google`
- **TypeScript** — strict mode throughout

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout: header, footer, grid, scroll nav
│   ├── page.tsx            # homepage
│   ├── blog/page.tsx       # writing page
│   ├── links/page.tsx      # curated links
│   ├── lab/page.tsx        # experiments (behind LAB_ENABLED flag)
│   └── globals.css         # design tokens, keyframes, reveal transitions
│
├── components/
│   ├── Header.tsx          # sticky frosted-glass header
│   ├── NavLinks.tsx        # client — view transition navigation
│   ├── Footer.tsx          # minimal footer
│   ├── GridBackground.tsx  # client — tracks mouse position for CSS spotlight
│   ├── ScrollNav.tsx       # client — scrollspy side nav (homepage only)
│   ├── Reveal.tsx          # client — IntersectionObserver scroll fade-in
│   ├── PageHeader.tsx      # h1 + subtitle with entrance animation
│   ├── HeroSection.tsx     # homepage layout (about, stack, contact)
│   ├── AboutSection.tsx    # bio paragraphs
│   ├── ContactSection.tsx  # contact links with ContactCard
│   ├── Window.tsx          # Tokyo Night terminal component
│   ├── PostCard.tsx        # blog post card
│   ├── LinkGroup.tsx       # categorised link list
│   └── LabClient.tsx       # client — tilt cards + particle canvas experiments
│
└── lib/
    └── config.ts           # feature flags (LAB_ENABLED)
```

## Animations

All animations are pure CSS and vanilla JS — no libraries.

| Effect                     | Mechanism                                                     |
| -------------------------- | ------------------------------------------------------------- |
| Hero line entrance stagger | CSS keyframes + `--i` custom property delay                   |
| Name gradient              | `gradient-pan` keyframe, `background-clip: text`              |
| Terminal row cascade       | `nth-child` animation delays                                  |
| Scroll reveal              | `IntersectionObserver` → `.revealed` class → CSS transition   |
| Interactive grid           | `mousemove` → `--mx`/`--my` CSS vars → `radial-gradient` mask |

## Feature flags

`src/lib/config.ts` controls optional features:

```ts
export const LAB_ENABLED = false; // set to true to enable /lab
```

## Links

- LinkedIn: [linkedin.com/in/knnthgms](https://linkedin.com/in/knnthgms)
- GitHub: [github.com/knnthgms](https://github.com/knnthgms)
- Email: knnthgms@gmail.com
