import { Button, Layout } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import NameLogo from "../NameLogo";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  max-width: 850px;
  padding: 0 20px;
  align-self: center;
  width: 100%;
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

const HeaderContent = styled.div<{ root: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: ${({ root }) => (root ? "flex-end" : "space-between")};
`;

const Logo = styled.div<{ root: boolean }>`
  display: ${({ root }) => (root ? "none" : "flex")};
`;

const Links = styled.div`
  display: flex;
  gap: 1em;
`;

const CustomHeader = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader>
      <HeaderContent root={isRootPath}>
        <Logo root={isRootPath}>
          <Link to="/">
            <NameLogo />
          </Link>
        </Logo>
        <Links>
          <Button href="/projects" type="text">
            {t("projects")}
          </Button>
          <Button onClick={() => scrollTo("contact")} type="text">
            {t("contact")}
          </Button>
        </Links>
      </HeaderContent>
    </StyledHeader>
  );
};

export default CustomHeader;
