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

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostCard = styled.a`
  display: block;
  border: 1px solid rgba(190, 252, 174, 0.12);
  border-radius: 10px;
  padding: 1.5rem;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
  cursor: pointer;

  &:hover {
    border-color: rgba(190, 252, 174, 0.35);
    background: rgba(190, 252, 174, 0.04);
  }
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(190, 252, 174, 0.12);
  color: ${({ theme }) => theme.colors.heading};
`;

const PostDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.6;
`;

const Draft = styled.span`
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(255, 189, 68, 0.15);
  color: #ffbd44;
  font-weight: 600;
`;

const PostTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.4rem;
`;

const PostExcerpt = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  opacity: 0.8;
`;

const ComingSoon = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px dashed rgba(190, 252, 174, 0.2);
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.6;
  font-size: 0.9rem;
`;

const posts = [
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

function Blog() {
  return (
    <Fade triggerOnce cascade damping={0.15}>
      <PageTitle>Writing</PageTitle>
      <PageSubtitle>
        Notes on frontend engineering, product thinking, and working in growth
        tech.
      </PageSubtitle>
      <PostList>
        {posts.map((post) => (
          <PostCard key={post.title} href={post.href}>
            <PostMeta>
              <Tag>{post.tag}</Tag>
              <PostDate>{post.date}</PostDate>
              {post.draft && <Draft>Draft</Draft>}
            </PostMeta>
            <PostTitle>{post.title}</PostTitle>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
          </PostCard>
        ))}
      </PostList>
      <ComingSoon>
        Posts are in progress — check back soon.
      </ComingSoon>
    </Fade>
  );
}

export default Blog;
