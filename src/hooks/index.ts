import { useCallback, useState } from "react";

export const useToggle = (initialState = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export const useTheme = () => {
  const [isDarkMode, toggleTheme] = useToggle(false);
  return { isDarkMode, toggleTheme };
};
