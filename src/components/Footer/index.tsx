import { Layout } from "antd";
import { useTranslation } from "react-i18next";
import { NavLink, Chat } from "./styles";
import NameLogo from "../NameLogo";
import styled from "styled-components";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterSection = styled(Footer)`
  display: flex;
  gap: 2rem;
  padding: 2.5rem;
  text-align: center;
`;

const IconContainer = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  transition: all 0.3s ease-in-out;
  font-size: 1.8rem;
`;

const CustomFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <NavLink to="/">
        <NameLogo />
      </NavLink>

      <IconContainer>
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
      </IconContainer>
      <a href="mailto:knnthgms@gmail.com">
        <Chat>{t(`Email me`)}</Chat>
      </a>
    </FooterSection>
  );
};

export default CustomFooter;
