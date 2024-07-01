import "./globals.css";
import { ToggleThemeProvider } from "../utils/toggleTheme";
import BodyWrapper from "@/components/body";


export const metadata = {
  title: "BGL Stocks Trading",
  description: "BGL Securities Trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ToggleThemeProvider>
        <BodyWrapper>{children}</BodyWrapper>
      </ToggleThemeProvider>
    </html>
  );
}
