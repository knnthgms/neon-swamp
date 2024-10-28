import { lazy } from "react";
import ContentSection from "../../components/ContentSection";
import TextWithTitle from "../../components/TextWithTitle";
import { SvgIcon } from "../../common/SvgIcon";
import { Slide, Fade } from "react-awesome-reveal";
import { Layout } from "antd";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContactForm = lazy(() => import("../../components/ContactForm"));

const { Content } = Layout;

const Home = () => {
  return (
    <Content>
      <ScrollToTop />
      <ContentSection id="intro" layout="left">
        <ContentSection.Block>
          <Fade triggerOnce>
            <SvgIcon src="developer.svg" width="100%" height="100%" />
          </Fade>
        </ContentSection.Block>

        <ContentSection.Block>
          <Fade triggerOnce>
            <TextWithTitle
              title="Hi, I'm Kenneth Gomes"
              content="I'm a Senior Frontend Developer with a strong focus on creating seamless user experiences and solving complex challenges. With experience in React, React Native, and TypeScript, I build applications that are user-focused, scalable, and intuitive."
            />
          </Fade>
        </ContentSection.Block>
      </ContentSection>

      <ContentSection id="extra" layout="middle">
        <ContentSection.Center>
          <Slide direction="up" triggerOnce>
            <TextWithTitle
              title="What I Offer"
              content="As a frontend developer with a passion for product engineering, I bring together the technical and design sides of development. I aim to deliver polished, scalable solutions, with special attention to user empathy, business priorities, and app analytics."
            />
          </Slide>
        </ContentSection.Center>
      </ContentSection>

      <ContentSection id="about" layout="right">
        <ContentSection.Block>
          <Slide direction="left" triggerOnce>
            <SvgIcon src="graphs.svg" width="100%" height="100%" />
          </Slide>
        </ContentSection.Block>
        <ContentSection.Block>
          <Slide direction="left" triggerOnce>
            <TextWithTitle
              title="About Me"
              content="I completed my MSc in Information Systems, excelling in areas like User Experience Design and Web Product Development. My technical expertise is complemented by a deep understanding of user behavior and business goals. I’ve also worked with diverse technologies, including AWS, Unity Engine, and Redux."
            />
          </Slide>
        </ContentSection.Block>
      </ContentSection>

      <ContentSection id="skills" layout="left">
        <ContentSection.Block>
          <Slide direction="right" triggerOnce>
            <SvgIcon src="product-launch.svg" width="100%" height="100%" />
          </Slide>
        </ContentSection.Block>
        <ContentSection.Block>
          <Slide direction="right" triggerOnce>
            <TextWithTitle
              title="Skills"
              content={
                <ul>
                  <li>React, React Native, TypeScript </li>
                  <li>Redux, Context API, Redux Saga </li>
                  <li>i18n for multi-language support </li>
                  <li>Firebase, CodePush, AppCenter integration </li>
                  <li>Data flow architecture and app scalability </li>
                  <li>Performance optimization</li>
                  <li>AWS-hosted self-executing scripts </li>
                  <li>Unity Engine for cloud automation</li>
                </ul>
              }
            />
          </Slide>
        </ContentSection.Block>
      </ContentSection>

      <ContentSection id="projects" layout="right">
        <ContentSection.Block>
          <Slide direction="left" triggerOnce>
            <SvgIcon src="product-launch.svg" width="100%" height="100%" />
          </Slide>
        </ContentSection.Block>
        <ContentSection.Block>
          <Slide direction="left" triggerOnce>
            <TextWithTitle
              title="Projects"
              content={`Some projects I've worked on in the past`}
            />
          </Slide>
        </ContentSection.Block>
      </ContentSection>

      <ContentSection id="blog" layout="left">
        <ContentSection.Block>
          <Slide direction="right" triggerOnce>
            <SvgIcon src="product-launch.svg" width="100%" height="100%" />
          </Slide>
        </ContentSection.Block>
        <ContentSection.Block>
          <Slide direction="right" triggerOnce>
            <TextWithTitle title="blog" content="Coming soon" />
          </Slide>
        </ContentSection.Block>
      </ContentSection>

      <ContentSection id="contact" layout="left">
        <ContentSection.Block>
          <Slide direction="left" triggerOnce>
            <TextWithTitle
              title="Get In Touch"
              content="Have a project or a role in mind that you’d like to discuss? Feel free to reach out to me!"
            />
          </Slide>
        </ContentSection.Block>
        <ContentSection.Block>
          <Slide direction="right" triggerOnce>
            <ContactForm />
          </Slide>
        </ContentSection.Block>
      </ContentSection>
    </Content>
  );
};

export default Home;
