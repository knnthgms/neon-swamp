import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { ConfigProvider } from "antd";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff7625",
            sizeStep: 5,
            sizeUnit: 5,
            borderRadius: 1,
            fontSize: 15,
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
