import { lazy } from "react";
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title="Hi, I'm Kenneth Gomes"
        content="Frontend dev with data analytics"
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock title="middle block title" content="middle block content" />
      <ContentBlock
        direction="left"
        title="About me"
        content="about me text"
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title="Skills"
        content="skills text bullets"
        icon="product-launch.svg"
        id="skills"
      />
      <Contact title="contact me" content="send me a message" id="contact" />
    </Container>
  );
};

export default Home;
