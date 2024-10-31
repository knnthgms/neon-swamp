import { createContext, useContext, ReactNode } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useToggle } from "../hooks";

const solidThemeColor = "#265559";

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
  colorPrimary: "#ff7625",
  fontFamily: "Inter",
  sizeStep: 5,
  sizeUnit: 5,
  fontSize: 15,
};

const draculaDarkMode = {
  algorithm: darkAlgorithm,
  token: {
    ...commonTokenSettings,
    colorBgLayout: solidThemeColor,
    colorText: "#befcae",
    colorBgContainer: "#1c2541",
    colorBorder: "#3a4a6a",
    colorLink: "#befcae",
    colorTextHeading: "#befcae",
  },
  components: {
    Layout: {
      headerBg: solidThemeColor,
      footerBg: solidThemeColor,
    },
  },
};

const lightMode = {
  algorithm: defaultAlgorithm,
  token: {
    ...commonTokenSettings,
    colorBgLayout: "#ffffff",
    colorText: "#000000",
    colorBgContainer: "#f0f2f5",
    colorBorder: "#d9d9d9",
  },
  components: {
    Layout: {
      headerBg: "#ffffff",
      footerBg: "#f0f2f5",
    },
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, toggleTheme] = useToggle(true);

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
