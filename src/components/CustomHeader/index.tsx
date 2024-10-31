import { Button, Layout } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 900px;
  align-self: center;
  width: 100%;
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

const CustomHeader = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader>
      <Button onClick={() => scrollTo("about")} type="text">
        {t("about")}
      </Button>
      <Button onClick={() => scrollTo("skills")} type="text">
        {t("skills")}
      </Button>
      <Button onClick={() => scrollTo("projects")} type="text">
        {t("projects")}
      </Button>
    </StyledHeader>
  );
};

export default CustomHeader;
