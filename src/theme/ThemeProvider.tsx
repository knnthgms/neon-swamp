import { createContext, useContext, ReactNode } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useToggle } from "../hooks";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
  isDarkMode: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

const { darkAlgorithm, defaultAlgorithm } = antdTheme;

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
    colorPrimary: "#58DBD4",
    colorBgLayout: "#0E1729",
    colorText: "#f8f8f2",
    colorBgContainer: "#1c2541",
    colorBorder: "#3a4a6a",
    colorSuccess: "#3ddc97",
    colorWarning: "#ffb86c",
    colorError: "#ff5555",
    colorInfo: "#58DBD4",
    colorLink: "#58DBD4",
  },
  components: {
    Layout: {
      ...commonLayoutSettings,
      headerBg: "#0E1729",
      footerBg: "#0E1729",
    },
  },
};

const lightMode = {
  algorithm: defaultAlgorithm,
  token: {
    ...commonTokenSettings,
    colorPrimary: "#ff7625",
    colorBgLayout: "#ffffff",
    colorText: "#000000",
    colorBgContainer: "#f0f2f5",
    colorBorder: "#d9d9d9",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1890ff",
    colorLink: "#1890ff",
  },
  components: {
    Layout: {
      ...commonLayoutSettings,
      headerBg: "#ffffff",
      footerBg: "#f0f2f5",
    },
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, toggleTheme] = useToggle();

  const currentTheme = isDarkMode ? draculaDarkMode : lightMode;

  const styledTheme = {
    isDarkMode,
    colors: {
      primary: currentTheme.token.colorPrimary,
      background: currentTheme.token.colorBgLayout,
      text: currentTheme.token.colorText,
      containerBg: currentTheme.token.colorBgContainer,
      border: currentTheme.token.colorBorder,
    },
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={styledTheme}>
        <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
