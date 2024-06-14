"use client";
import { DM_Sans, Pathway_Extreme } from "next/font/google";
import { createGlobalStyle, useTheme } from "styled-components";
import RootProvider from "./Provider";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export const DMFont = DM_Sans({ weight: ["700"], subsets: ["latin"] });
export const pathWay = Pathway_Extreme({ subsets: ["latin"] });

const BodyWrapper = ({ children, className }) => {
  const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
  }
`;
  const theme = useTheme();

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <body className={`${pathWay.className} overflow-x-hidden `}>
          {children}
        </body>
      </Provider>
    </>
  );
};

export default BodyWrapper;
