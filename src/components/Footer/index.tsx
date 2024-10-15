import { Row, Col, Layout } from "antd";
import { useTranslation } from "react-i18next";
import { NavLink, Chat, FooterContainer } from "./styles";
import NameLogo from "../NameLogo";
import styled from "styled-components";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterSection = styled(Footer)`
  gap: 2rem;
  padding: 2.5rem;
`;

const CustomFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <Row justify="center">
        <Col>
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
          <NavLink to="/">
            <NameLogo />
          </NavLink>
        </Col>
      </Row>
    </FooterSection>
  );
};

export default CustomFooter;
