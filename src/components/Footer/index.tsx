import { Layout, Button } from "antd";
// import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterSection = styled(Footer)`
  text-align: center;
`;

const CustomFooter = () => {
  // const { t } = useTranslation();

  return (
    <FooterSection>
      <Button
        type="link"
        href="https://github.com/knnthgms"
        icon={<GithubOutlined />}
      >
        Github
      </Button>
      <Button
        type="link"
        href="https://www.linkedin.com/in/knnthgms"
        icon={<LinkedinOutlined />}
      >
        LinkedIn
      </Button>
      <Button
        type="link"
        href="mailto:knnthgms@gmail.com"
        icon={<MailOutlined />}
      >
        knnthgms@gmail.com
      </Button>
    </FooterSection>
  );
};

export default CustomFooter;
