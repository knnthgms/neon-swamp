import { Button, Layout } from "antd";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import NameLogo from "../NameLogo";
import { useNavigate } from "../../hooks";

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
  gap: 0.5em;
  align-items: center;
`;

const CustomHeader = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact") as HTMLDivElement;
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHeader>
      <HeaderContent root={isRootPath}>
        <Logo root={isRootPath}>
          <Link to="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
            <NameLogo />
          </Link>
        </Logo>
        <Links>
          <Button onClick={() => navigate("/blog")} type="text" size="small">
            Blog
          </Button>
          <Button onClick={() => navigate("/links")} type="text" size="small">
            Links
          </Button>
          <Button onClick={() => navigate("/lab")} type="text" size="small">
            Lab
          </Button>
          <Button onClick={scrollToContact} type="text" size="small">
            Contact
          </Button>
        </Links>
      </HeaderContent>
    </StyledHeader>
  );
};

export default CustomHeader;
