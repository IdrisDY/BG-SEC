"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { SunIcon } from "@chakra-ui/icons";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export const ToggleThemeContext = createContext();

const darkTheme = {
  mode: "dark",
  background: "#131414",

  color: "#ffffff",
  img: <FaRegMoon size={"20px"} color={"#83796B"} />,
};

const lightTheme = {
  mode: "light",
  background: "#ffffff",
  dashboard_bg: "#EEF6F6",
  color: "#121212",
  img: <FiSun size={"20px"} />,
  h2txt: "#0B1E1E",
};

export const ToggleThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
  }, [theme]);

  return (
    <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
