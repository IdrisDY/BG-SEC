"use client";
import Footer from "./footer";
import Header from "./header";
import { DM_Sans, Pathway_Extreme } from "next/font/google";
import { createGlobalStyle, useTheme } from "styled-components";

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

  console.log(theme);
  return (
    <>
      <GlobalStyle />
      <body className={pathWay.className}>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </>
  );
};

export default BodyWrapper;
