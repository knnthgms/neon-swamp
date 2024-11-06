import styled, { keyframes, css } from "styled-components";
import Typewriter from "typewriter-effect";
import { useToggle } from "../hooks";
import { Fade } from "react-awesome-reveal";
import Window from "./Window";

const gradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const gradientColors = [
  "#befcae", // Soft, light green
  "#a3f7bf", // Light mint green
  "#80f1c6", // Bright aqua green
  "#5cd3e3", // Aqua
  "#34b6e8", // Soft cyan blue
  "#2193b0", // Sky blue
  "#6dd5ed", // Light blue
  "#91e8f9", // Lighter blue for contrast
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span<{ animate: boolean }>`
  display: flex;
  gap: 8px;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: ${({ animate, theme }) =>
    animate ? "transparent" : theme.colors.heading};
  background: ${({ animate }) =>
    animate
      ? `linear-gradient(to right, ${gradientColors.join(", ")})`
      : "none"};
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ animate, theme }) =>
    animate ? "transparent" : theme.colors.heading};
  ${({ animate }) =>
    animate &&
    css`
      animation: ${gradient} 5s ease-in-out infinite;
    `}
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
  const [showGradient, toggleShowGradient] = useToggle(false);

  const onCompleteHelloMsg = () => {
    toggleShowRest();
  };

  const startGradientText = () => {
    toggleShowGradient();
  };

  return (
    <Container>
      <Title animate={showGradient}>
        &gt;
        <Typewriter
          options={{ delay: 30 }}
          onInit={(t) =>
            t
              .typeString(HelloMsg)
              .start()
              .pauseFor(200)
              .callFunction(onCompleteHelloMsg)
              .pauseFor(1000)
              .callFunction(startGradientText)
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
