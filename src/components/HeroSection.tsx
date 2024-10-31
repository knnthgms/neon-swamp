import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Container = styled.section`
  padding: 10vh 20px 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  font-size: 1.4rem;
  margin: 0 auto;
  max-width: 920px;
`;

const Marquee = styled.span`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.4rem;
`;

const Subtitle = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Paragraph = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

function HeroSection() {
  const HelloMsg = `Hi, I'm Ken Gomes!`;

  return (
    <Container>
      <Marquee>
        <RightOutlined />
        <Typewriter
          options={{
            strings: HelloMsg,
            autoStart: true,
            delay: 35,
          }}
        />
      </Marquee>
      <Subtitle>
        A web developer with a passion for building beautiful user experiences.
      </Subtitle>
      <Paragraph>
        Most recently, I collaborated with OmniRetail Africa to build
        applications for thousands of distributors, manufacturers, and
        retailers. This role challenged me to design for low-bandwidth and
        low-spec devices, using React Native.
      </Paragraph>
      <Paragraph>
        I also spearheaded user behavioral analytics through A/B testing and
        workflow optimization. With a background in Information Systems, I bring
        expertise in UX, product management, and database management to every
        project.
      </Paragraph>
    </Container>
  );
}

export default HeroSection;
