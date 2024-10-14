import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Drawer, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  HeaderSection,
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

const Header = () => {
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);

  const displayDrawer = () => setShowDrawer(true);
  const hideDrawer = () => setShowDrawer(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    hideDrawer();
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
    <Slide direction="down">
      <HeaderSection>
        <Container>
          <Row justify="space-between">
            <Link to="/" aria-label="homepage">
              <NameLogo />
            </Link>
            <NotHidden>
              <MenuItems />
            </NotHidden>
            <Burger onClick={() => setShowDrawer(true)}>
              <HamburgerOutline />
            </Burger>
          </Row>
          <Drawer closable={false} open={showDrawer} onClose={hideDrawer}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <Label onClick={displayDrawer}>
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
    </Slide>
  );
};

export default Header;
