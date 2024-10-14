import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

type ContentSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode;
  layout?: "left" | "right" | "middle";
};

const SectionWrapper = styled.section`
  padding: 4rem 0;
`;

const ContentSection: React.FC<ContentSectionProps> & {
  Block: React.FC<ContentSectionProps>;
  Center: React.FC<ContentSectionProps>;
} = ({ children, layout, ...rest }) => {
  return (
    <SectionWrapper {...rest}>
      <Row
        justify={layout === "middle" ? "center" : "space-between"}
        align="middle"
        style={{ flexDirection: layout === "right" ? "row-reverse" : "row" }}
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
    <Col
      xs={24}
      sm={24}
      md={18}
      lg={18}
      style={{ textAlign: "center" }}
      {...rest}
    >
      {children}
    </Col>
  );
};

ContentSection.Block = Block;
ContentSection.Center = Center;

export default ContentSection;
