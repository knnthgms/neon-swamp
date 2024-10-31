import { Slide, Fade } from "react-awesome-reveal";
import { Layout } from "antd";
import HeroSection from "../../components/HeroSection";
import styled from "styled-components";

const { Content } = Layout;

const FlexContainer = styled(Content)`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <FlexContainer>
      <HeroSection />
    </FlexContainer>
  );
};

export default Home;
