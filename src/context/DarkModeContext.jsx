import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../theme";
import PropTypes from "prop-types";

export const DarkModeContext = React.createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  console.log("lightTheme?", lightTheme);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node,
};
