import { Layout, Spin, Row, Col } from "antd";
import { CSSReset, CustomFont, AntdStyles } from "../styles/styles";
import CustomHeader from "../components/CustomHeader";
import { Suspense } from "react";
import CustomFooter from "../components/Footer";
import Router from "../router";
import styled from "styled-components";

const { Content } = Layout;

const Container = styled.div`
  padding: 10vh 0;
  @media only screen and (max-width: 967px) {
    padding: 10vh 20px;
  }
`;

function AppLayout() {
  return (
    <Suspense fallback={<Spin fullscreen />}>
      <Layout style={{ minHeight: "100vh" }}>
        <CSSReset />
        <AntdStyles />
        <CustomFont />
        <CustomHeader />
        <Content>
          <Row justify="center">
            <Col xs={24} sm={21} md={18} lg={15} xl={12}>
              <Container>
                <Router />
              </Container>
            </Col>
          </Row>
        </Content>
        <CustomFooter />
      </Layout>
    </Suspense>
  );
}

export default AppLayout;
