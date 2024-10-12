import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { NavLink, Chat, FooterContainer } from "./styles";
import NameLogo from "../NameLogo";
import styled from "styled-components";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 8rem;
  @media only screen and (max-width: 1024px) {
    margin-top: 4rem;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <Row justify="center">
        <Col lg={11} md={11} sm={24} xs={24}>
          <NavLink to="/">
            <NameLogo />
          </NavLink>
          <NavLink to="mailto:knnthgms@gmail.com">
            <Chat>{t(`Email me`)}</Chat>
          </NavLink>
          <FooterContainer>
            <a
              href="https://github.com/knnthgms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://twitter.com/knnthgms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/knnthgms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined />
            </a>
          </FooterContainer>
        </Col>
      </Row>
    </FooterSection>
  );
};

export default Footer;
