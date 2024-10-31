import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Container = styled.section`
  padding: 20vh 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  font-size: 1.4rem;
  flex: 1;
  margin: 0 20px;
`;

const Marquee = styled.span`
  color: #befcae;
  font-size: 2rem;
  display: flex;
  gap: 8px;
  margin-bottom: 0.4rem;
`;

function HeroSection() {
  const HelloMsg = `Hi, I'm Ken Gomes!`;

  return (
    <Row align="middle" justify="center">
      <Col xs={24} sm={24} md={18} lg={12}>
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
          <span>
            A web developer with a passion for building beautiful user
            experiences.
          </span>
        </Container>
      </Col>
    </Row>
  );
}

export default HeroSection;
