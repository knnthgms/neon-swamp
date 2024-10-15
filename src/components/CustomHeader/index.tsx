import { useState } from "react";
import { Row, Col, Drawer, Layout } from "antd";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SmallScreen, LargeScreen, HamburgerOutline } from "./styles";
import NameLogo from "../NameLogo";
import MenuItems from "../MenuItems";

const { Header } = Layout;

const CustomHeader = () => {
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

  const openCVPdf = () => {
    window.open("assets/KENNETH_GOMES_CV.pdf", "_blank");
  };

  const menuItems = [
    {
      label: t("about"),
      onClick: () => scrollTo("about"),
      type: "text",
    },
    {
      label: t("skills"),
      onClick: () => scrollTo("skills"),
      type: "text",
    },
    {
      label: t("projects"),
      onClick: () => scrollTo("projects"),
      type: "text",
    },
    {
      label: t("contact"),
      onClick: () => scrollTo("contact"),
      type: "text",
    },
    {
      label: "View CV",
      onClick: openCVPdf,
      type: "primary",
    },
  ];

  return (
    <Header>
      <Slide direction="down" triggerOnce>
        <Row align="middle" justify="space-between">
          <Col>
            <NameLogo />
          </Col>
          <Col>
            <LargeScreen>
              <MenuItems items={menuItems} />
            </LargeScreen>
            <SmallScreen onClick={displayDrawer}>
              <HamburgerOutline />
            </SmallScreen>
          </Col>
        </Row>
        <Drawer title="Menu" closable open={showDrawer} onClose={hideDrawer}>
          <MenuItems items={menuItems} orientation="vertical" />
        </Drawer>
      </Slide>
    </Header>
  );
};

export default CustomHeader;
