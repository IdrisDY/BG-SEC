"use client";
import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";
import { DM_Sans, Pathway_Extreme } from "next/font/google";
import { createGlobalStyle, useTheme } from "styled-components";
import { usePathname } from "next/navigation";

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
  const router = usePathname()
  const homePath = router=== "/";
  console.log(router);
  console.log(theme);
  return (
    <>
      <GlobalStyle />
      <body className={`${pathWay.className} overflow-x-hidden `}>
        {homePath && <Header />} 
        {children}
        {homePath && <Footer />}{" "}
      </body>
    </>
  );
};

export default BodyWrapper;
