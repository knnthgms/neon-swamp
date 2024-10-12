import { Row, Col, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "antd";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  HamburgerOutline,
  Span,
  CrossOutline,
} from "./styles";
import NameLogo from "../NameLogo";
import { useToggle } from "../../hooks";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const [showDrawer, toggleDrawer] = useToggle(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    toggleDrawer();
  };

  const menuItems = [
    {
      label: t("about"),
      onClick: () => scrollTo("about"),
    },
    {
      label: t("skills"),
      onClick: () => scrollTo("skills"),
    },
    {
      label: t("projects"),
      onClick: () => scrollTo("projects"),
    },
    {
      label: t("contact"),
      onClick: () => scrollTo("contact"),
    },
  ];

  const MenuItems = () => {
    return (
      <>
        {menuItems.map((line) => (
          <CustomNavLinkSmall key={line.label} onClick={line.onClick}>
            <Span>{line.label}</Span>
          </CustomNavLinkSmall>
        ))}
        <Button size="large" onClick={() => scrollTo("contact")}>
          View CV
        </Button>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <Link to="/" aria-label="homepage">
            <NameLogo />
          </Link>
          <NotHidden>
            <MenuItems />
          </NotHidden>
          <Burger onClick={toggleDrawer}>
            <HamburgerOutline />
          </Burger>
        </Row>
        <Drawer closable={false} open={showDrawer} onClose={toggleDrawer}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleDrawer}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <CrossOutline />
              </Col>
            </Label>
          </Col>
          <MenuItems />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
