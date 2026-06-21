import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.25rem;
`;

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  font-size: 1rem;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.heading};
  opacity: 0.5;
  margin-bottom: 1rem;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LinkItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(190, 252, 174, 0.1);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(190, 252, 174, 0.3);
    background: rgba(190, 252, 174, 0.04);
  }
`;

const LinkTitle = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heading};
`;

const LinkDesc = styled.span`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.65;
`;

const UpdateNote = styled.p`
  margin-top: 3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.4;
  text-align: right;
`;

const sections = [
  {
    title: "Frontend & Engineering",
    links: [
      {
        title: "Josh W. Comeau — CSS for JavaScript Developers",
        desc: "The best resource I've found for really understanding CSS — not just cargo-culting it.",
        href: "https://www.joshwcomeau.com",
      },
      {
        title: "web.dev",
        desc: "Google's engineering guides on performance, accessibility, and modern web APIs.",
        href: "https://web.dev",
      },
      {
        title: "Smashing Magazine",
        desc: "Consistently good long-form on frontend patterns, UX, and tooling.",
        href: "https://www.smashingmagazine.com",
      },
      {
        title: "Kent C. Dodds — Epic React",
        desc: "Kent's mental models for React are the clearest I've encountered.",
        href: "https://epicreact.dev",
      },
    ],
  },
  {
    title: "Design & Systems",
    links: [
      {
        title: "Refactoring UI",
        desc: "The book that changed how I think about visual design decisions as an engineer.",
        href: "https://www.refactoringui.com",
      },
      {
        title: "Linear Blog",
        desc: "Product and design writing from one of the most thoughtfully-built tools out there.",
        href: "https://linear.app/blog",
      },
      {
        title: "Storybook Blog",
        desc: "Component-driven UI patterns and design system best practices.",
        href: "https://storybook.js.org/blog",
      },
    ],
  },
  {
    title: "Product & Growth",
    links: [
      {
        title: "Lenny's Newsletter",
        desc: "The most consistently useful product thinking I've found in a newsletter.",
        href: "https://www.lennysnewsletter.com",
      },
      {
        title: "Reforge Blog",
        desc: "Deep frameworks for product growth — especially useful if you work at the engineering/product boundary.",
        href: "https://www.reforge.com/blog",
      },
      {
        title: "The Pragmatic Engineer",
        desc: "Gergely Orosz on how engineering actually works inside large companies.",
        href: "https://blog.pragmaticengineer.com",
      },
    ],
  },
  {
    title: "Tools I Use",
    links: [
      {
        title: "ray.so",
        desc: "Beautiful code screenshots. I use this constantly for sharing snippets.",
        href: "https://ray.so",
      },
      {
        title: "Excalidraw",
        desc: "My go-to for quick architecture diagrams and whiteboarding.",
        href: "https://excalidraw.com",
      },
      {
        title: "Warp Terminal",
        desc: "The terminal I've been using daily — the AI command search alone makes it worth it.",
        href: "https://www.warp.dev",
      },
    ],
  },
];

function Links() {
  return (
    <Fade triggerOnce cascade damping={0.1}>
      <PageTitle>Links</PageTitle>
      <PageSubtitle>
        Things I'm reading, tools I use, and corners of the internet I keep
        returning to. Updated irregularly.
      </PageSubtitle>
      {sections.map((section) => (
        <Section key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          <LinkList>
            {section.links.map((link) => (
              <LinkItem
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkTitle>{link.title}</LinkTitle>
                <LinkDesc>{link.desc}</LinkDesc>
              </LinkItem>
            ))}
          </LinkList>
        </Section>
      ))}
      <UpdateNote>Last updated June 2025</UpdateNote>
    </Fade>
  );
}

export default Links;
