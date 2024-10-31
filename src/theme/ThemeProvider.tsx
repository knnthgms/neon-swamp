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
  colorPrimary: "#e67300",
  fontFamily: "Inter",
  sizeStep: 5,
  sizeUnit: 5,
  fontSize: 15,
};

const draculaDarkMode = {
  algorithm: darkAlgorithm,
  token: {
    ...commonTokenSettings,
    colorBgLayout: "#265559",
    colorTextHeading: "#befcae",
    colorText: "#c5fcb6",
    colorBorder: "#3a4a6a",
    colorLink: "#befcae",
  },
  components: {
    Layout: {
      headerBg: "#265559",
      footerBg: "#2b3e4f",
    },
  },
};

const lightMode = {
  algorithm: defaultAlgorithm,
  token: {
    ...commonTokenSettings,
    colorPrimary: "#d15b12", // slightly muted warm tone
    colorBgLayout: "#ffffff",
    colorText: "#1a1a1a",
    colorBorder: "#d9d9d9",
    colorLink: "#2a6a72",
    colorTextHeading: "#1a3a33",
  },
  components: {
    Layout: {
      headerBg: "#f0f2f5",
      footerBg: "#e2e8ec",
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
      heading: currentTheme.token.colorTextHeading,
      text: currentTheme.token.colorText,
      textSecondary: "#abe39d",
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
