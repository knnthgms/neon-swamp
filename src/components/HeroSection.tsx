import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Container = styled.section`
  padding: 8rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  font-size: 1.4rem;
  flex: 1;
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
      <Col xs={22} sm={22} md={12} lg={12}>
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
            I'm a web developer. My passion is building beautiful user
            experiences.
          </span>
        </Container>
      </Col>
    </Row>
  );
}

export default HeroSection;
