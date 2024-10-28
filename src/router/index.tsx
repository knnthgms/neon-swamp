import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Layout, Spin } from "antd";
import { Switch, Route } from "react-router-dom";
import CustomFooter from "../components/Footer";
import routes from "./config";
import { CSSReset, CustomFont, AntdStyles } from "../styles/styles";
import CustomHeader from "../components/CustomHeader";
import styled from "styled-components";

type SectionWrapperProps = {
  mouseX: number;
  mouseY: number;
};

const GradientContainer = styled(Layout)<SectionWrapperProps>`
  position: relative;
  &:before {
    background: radial-gradient(
      800px circle at ${({ mouseX, mouseY }) => `${mouseX}px ${mouseY}px`},
      rgba(29, 78, 216, 0.2),
      transparent 40%
    );
    content: "";
    border-radius: inherit;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
    pointer-events: none;
    transition: opacity 500ms;
    opacity: 0;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const Router = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });

        // // Dynamically set CSS variables for gradient tracking
        // sectionRef.current.style.setProperty("--x", `${x}px`);
        // sectionRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <GradientContainer
      mouseX={mousePosition?.x}
      mouseY={mousePosition?.y}
      ref={sectionRef}
    >
      <CSSReset />
      <AntdStyles />
      <CustomFont />
      <CustomHeader />
      <Suspense fallback={<Spin />}>
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(
                  () => import(`../pages/${routeItem.component}`)
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
      <CustomFooter />
    </GradientContainer>
  );
};

export default Router;
