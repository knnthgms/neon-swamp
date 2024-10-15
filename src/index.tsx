import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { ConfigProvider, theme } from "antd";
import Router from "./router";
import i18n from "./translation";
import { useToggle } from "./hooks";

const { darkAlgorithm, defaultAlgorithm } = theme;

const commonTokenSettings = {
  fontFamily: "Inter",
  sizeStep: 5,
  sizeUnit: 5,
  fontSize: 15,
};

const commonLayoutSettings = {
  headerPadding: "0 1rem",
};

const draculaDarkMode = {
  algorithm: darkAlgorithm,
  token: {
    ...commonTokenSettings,
    colorPrimary: "#ffb86c", // Dracula primary color
    colorBgLayout: "#282a36", // Dark background
    colorText: "#f8f8f2", // Dracula text color
    colorBgContainer: "#44475a", // Container background
    colorBorder: "#6272a4", // Dracula border color
    colorSuccess: "#50fa7b", // Green for success
    colorWarning: "#f1fa8c", // Yellow for warning
    colorError: "#ff5555", // Red for error
    colorInfo: "#8be9fd", // Cyan for info
    colorLink: "#bd93f9", // Link color
  },
  components: {
    Layout: {
      ...commonLayoutSettings,
      headerBg: "#44475a", // Dark header background
      footerBg: "#282a36", // Dark footer background
    },
  },
};

const lightMode = {
  algorithm: defaultAlgorithm,
  token: {
    ...commonTokenSettings,
    colorPrimary: "#ff7625", // Primary color for light mode
    colorBgLayout: "#ffffff", // Light background
    colorText: "#000000", // Standard text color
    colorBgContainer: "#f0f2f5", // Light container background
    colorBorder: "#d9d9d9", // Light border color
    colorSuccess: "#52c41a", // Default success green
    colorWarning: "#faad14", // Default warning yellow
    colorError: "#ff4d4f", // Default error red
    colorInfo: "#1890ff", // Default info blue
    colorLink: "#1890ff", // Default link color
  },
  components: {
    Layout: {
      ...commonLayoutSettings,
      headerBg: "#ffffff", // Light header background
      footerBg: "#f0f2f5", // Light footer background
    },
  },
};

const App = () => {
  const [isDarkMode, toggleTheme] = useToggle(true);

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ConfigProvider theme={isDarkMode ? draculaDarkMode : lightMode}>
          <Router toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </ConfigProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
