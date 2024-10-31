// import { Slide, Fade } from "react-awesome-reveal";
import { Layout } from "antd";
import HeroSection from "../../components/HeroSection";
import styled from "styled-components";
import Window from "../../components/Window";

const { Content } = Layout;

const FlexContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Home = () => {
  return (
    <FlexContainer>
      <HeroSection />
      <Window />
    </FlexContainer>
  );
};

export default Home;
