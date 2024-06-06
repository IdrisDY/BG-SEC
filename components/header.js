"use client";
import Button from "./button";
import { useTheme } from "styled-components";
import { ToggleThemeContext } from "@/app/utils/toggleTheme";
import { useContext } from "react";
const Header = () => {
  const theme = useTheme();
  const { text, toggleTheme } = useContext(ToggleThemeContext);
  console.log(theme, toggleTheme, "yeah im there like mad");
  return (
    <header  className="top-0 w-full "  >
      <nav className="flex w-[88%] m-auto justify-between items-center">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>

        <div>
          <ul className="flex items-center gap-8">
            <li>About Us</li>
            <li>Product</li>
            <li> FAQs</li>
            <li>Learn</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div className="flex items-center" >
          <button onClick={toggleTheme}  >
            {" "}
            <img src={theme.img} alt={theme.mode} />{" "}
          </button>
          <Button customClassName="" variant={ theme.mode === 'dark' ? 'black':'white' } text="Log In" />
          <Button customClassName="bg-btn_orange" text="Start Trading" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
