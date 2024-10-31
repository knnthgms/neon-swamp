import { Button, Layout } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const MenuContainer = styled.div`
  text-align: right;
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;

const { Header } = Layout;

const CustomHeader = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Header>
      <MenuContainer>
        <Button onClick={() => scrollTo("about")} type="text">
          {t("about")}
        </Button>
        <Button onClick={() => scrollTo("skills")} type="text">
          {t("skills")}
        </Button>
        <Button onClick={() => scrollTo("projects")} type="text">
          {t("projects")}
        </Button>
      </MenuContainer>
    </Header>
  );
};

export default CustomHeader;
