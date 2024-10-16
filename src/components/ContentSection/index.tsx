import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

type ContentSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode;
  layout?: "left" | "right" | "middle";
};

type SectionWrapperProps = {
  mouseX: number;
  mouseY: number;
};

const SectionWrapper = styled.section<SectionWrapperProps>`
  margin: 4rem 1rem;
  padding: 4rem 1rem;
  border-radius: 1rem;
  position: relative;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:before {
    background: radial-gradient(
      800px circle at ${({ mouseX, mouseY }) => `${mouseX}px ${mouseY}px`},
      rgba(29, 78, 216, 0.15),
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

  @media only screen and (max-width: 1024px) {
    margin: 2rem 0.5rem;
    padding: 2rem 0.5rem;
  }
`;

const ContentSection: React.FC<ContentSectionProps> & {
  Block: React.FC<ContentSectionProps>;
  Center: React.FC<ContentSectionProps>;
} = ({ children, layout, ...rest }) => {
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
    <SectionWrapper
      mouseX={mousePosition?.x}
      mouseY={mousePosition?.y}
      ref={sectionRef}
      {...rest}
    >
      <Row
        justify={layout === "middle" ? "center" : "space-between"}
        align="middle"
        style={{ flexDirection: layout === "right" ? "row-reverse" : "row" }}
        gutter={[20, 24]}
      >
        {children}
      </Row>
    </SectionWrapper>
  );
};

const Block: React.FC<ContentSectionProps> = ({ children, ...rest }) => {
  return (
    <Col xs={24} sm={24} md={12} lg={12} {...rest}>
      {children}
    </Col>
  );
};

const Center: React.FC<ContentSectionProps> = ({
  children,
  layout,
  ...rest
}) => {
  return (
    <Col style={{ textAlign: "center" }} {...rest}>
      {children}
    </Col>
  );
};

ContentSection.Block = Block;
ContentSection.Center = Center;

export default ContentSection;
