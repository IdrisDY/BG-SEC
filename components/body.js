"use client";
import { useEffect } from "react";
import { DM_Sans, Pathway_Extreme } from "next/font/google";
import { createGlobalStyle, ThemeProvider, useTheme } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export const DMFont = DM_Sans({ weight: ["700"], subsets: ["latin"] });
export const pathWay = Pathway_Extreme({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme, isDashboardAndLightTheme }) =>
      isDashboardAndLightTheme ? theme.dashboard_bg : theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
  }
`;

const BodyWrapper = ({ children, className }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isDashboardAndLightTheme =
    pathname.includes("/dashboard") && theme.mode === "light";

  useEffect(() => {
    document.body.style.background = isDashboardAndLightTheme
      ? theme.dashboard_bg
      : theme.background;
  }, [isDashboardAndLightTheme, theme]);

  return (
    <>
      <GlobalStyle isDashboardAndLightTheme={isDashboardAndLightTheme} />

      <Provider store={store}>
        <ChakraProvider>
          <body className={`${pathWay.className} overflow-x-hidden `}>
            {children}
          </body>
        </ChakraProvider>
      </Provider>
    </>
  );
};

export default BodyWrapper;
