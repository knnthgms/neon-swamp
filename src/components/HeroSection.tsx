import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { useToggle } from "../hooks";
import { Fade } from "react-awesome-reveal";
import Window from "./Window";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.4rem;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Paragraph = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

function HeroSection() {
  const HelloMsg = `Hi, I'm Ken Gomes!`;

  const [showRest, toggleShowRest] = useToggle(false);

  const onCompleteHelloMsg = () => {
    toggleShowRest();
  };

  return (
    <Container>
      <Title>
        <RightOutlined />
        <Typewriter
          options={{ delay: 30 }}
          onInit={(t) =>
            t
              .typeString(HelloMsg)
              .start()
              .pauseFor(200)
              .callFunction(onCompleteHelloMsg)
          }
        />
      </Title>
      {showRest && (
        <Fade triggerOnce cascade damping={0.25}>
          <Subtitle>
            A web developer with a passion for building beautiful user
            experiences.
          </Subtitle>
          <Paragraph>
            Most recently, I worked with OmniRetail Africa to build performant
            applications for thousands of distributors, manufacturers, and
            retailers across Africa. This role challenged me to design for
            low-bandwidth and low-spec devices, using React Native.
          </Paragraph>
          <Paragraph>
            I also spearheaded user behavioral analytics through A/B testing and
            workflow optimization. With a background in Information Systems, I
            bring expertise in UX, product management, and database management
            to every project.
          </Paragraph>
          <Window />
        </Fade>
      )}
    </Container>
  );
}

export default HeroSection;
