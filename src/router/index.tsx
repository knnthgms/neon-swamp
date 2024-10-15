import { lazy, Suspense } from "react";
import { Layout, Spin } from "antd";
import { Switch, Route } from "react-router-dom";
import CustomFooter from "../components/Footer";
import routes from "./config";
import { CSSReset, CustomFont, AntdStyles } from "../styles/styles";
import CustomHeader from "../components/CustomHeader";

interface RouterProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Router = ({ isDarkMode, toggleTheme }: RouterProps) => {
  return (
    <Layout>
      <CSSReset />
      <AntdStyles />
      <CustomFont />
      <CustomHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
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
    </Layout>
  );
};

export default Router;
