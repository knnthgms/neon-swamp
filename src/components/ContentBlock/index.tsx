import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentSection, Content, ContentWrapper, StyledRow } from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  id,
  direction,
}: ContentBlockProps) => {
  const { t } = useTranslation();

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={12} md={11} sm={24} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={12} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
