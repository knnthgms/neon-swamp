import { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./config";

const Router = () => {
  return (
    <Switch>
      {routes.map((routeItem) => {
        return (
          <Route
            key={routeItem.component}
            path={routeItem.path}
            exact={routeItem.exact}
            component={lazy(() => import(`../pages/${routeItem.component}`))}
          />
        );
      })}
    </Switch>
  );
};

export default Router;
