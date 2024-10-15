import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { ConfigProvider, theme } from "antd";
import Router from "./router";
import i18n from "./translation";

const { darkAlgorithm, defaultAlgorithm } = theme;

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ConfigProvider
          theme={{
            algorithm: defaultAlgorithm,
            token: {
              colorPrimary: "#ff7625",
              fontFamily: "Inter",
            },
            components: {
              Layout: {
                headerPadding: "0 1rem",
                headerBg: "#f5f5f5",
              },
            },
          }}

          // theme={{
          //   algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          //   components: {
          //     Typography: {
          //       fontFamilyCode:
          //         "'Inter', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          //     },
          //     Layout: {
          //       headerBg: "white",
          //     },
          //   },
          //   token: {
          //     colorPrimary: "#ff7625",
          //     sizeStep: 5,
          //     sizeUnit: 5,
          //     borderRadius: 1,
          //     fontSize: 15,
          //     // colorTextHeading: "#18216d",
          //     // colorText: "#18216d",
          //     // fontFamilyCode: "Inter",
          //   },
          // }}
        >
          <Router />
        </ConfigProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
