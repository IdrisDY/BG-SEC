"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

export const ToggleThemeContext = createContext();

const darkTheme = {
  mode: "dark",
  background: "#131414",
  color: "#ffffff",
  img: "/moon.svg",
};

const lightTheme = {
  mode: "light",
  background: "#ffffff",
  color: "#121212",
  img: "/sun-medium.svg",
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
