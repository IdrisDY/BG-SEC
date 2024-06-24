"use client";
import { useEffect } from "react";
import { DM_Sans, Pathway_Extreme } from "next/font/google";
import { createGlobalStyle, ThemeProvider, useTheme } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import SocketProvider from "@/utils/socket";
import { socket } from "@/utils/socket";

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
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err.message);
    });
    socket.on("bvn-consent", (msg) => {
      console.log("Message from server:", msg);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    document.body.style.background = isDashboardAndLightTheme
      ? theme.dashboard_bg
      : theme.background;
  }, [isDashboardAndLightTheme, theme]);
  // useEffect(() => {
  //   if (!socket) return;

  //   console.log('working');

  //   return () => {
  //     socket.off("bvn-consent");
  //   };
  // }, []);

  return (
    <>
      <GlobalStyle isDashboardAndLightTheme={isDashboardAndLightTheme} />
      <Provider store={store}>
        <body className={`${pathWay.className} overflow-x-hidden `}>
          <ChakraProvider>{children}</ChakraProvider>
        </body>
      </Provider>
    </>
  );
};

export default BodyWrapper;
