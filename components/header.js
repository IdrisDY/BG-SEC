"use client";
import Button from "./button";
import { useTheme } from "styled-components";
import { ToggleThemeContext } from "@/app/utils/toggleTheme";
import { useContext } from "react";
import Image from "next/image";
const Header = () => {
  const theme = useTheme();
  const { text, toggleTheme } = useContext(ToggleThemeContext);
  console.log(theme, toggleTheme, "yeah im there like mad");
  return (
    <header className="top-0  w-full ">
      <nav className="flex px-[1.25rem] h-[70px] lg:px-[112px]  m-auto justify-between items-center">
        <div className="w-[58%] lg:w-1/5 flex items-center " >
          <img src={`${theme.mode === 'dark'?"/logo.svg":'bgl_logo_light.svg'}`} alt="logo" />
        </div>

        <div className="hidden lg:flex h-full items-center ">
          <ul className="flex h-full justify-center items-center gap-8">
            <li>About Us</li>
            <li>Product</li>
            <li> FAQs</li>
            <li>Learn</li>
            <li> Contact Us</li>
          </ul>
        </div>

        <div className="relative flex lg:hidden h-[20px] w-[21px] ">
          <Image layout="fill" src="/align-justify.svg" alt="menu button" />
        </div>

        <div className="lg:flex hidden gap-6 items-center">
          <button className="w-[30px] h-[30px]" onClick={toggleTheme}>
            {" "}
            <img src={theme.img} alt={theme.mode} />{" "}
          </button>
          <Button
            customClassName=""
            variant={theme.mode === "dark" ? "black" : "white"}
            text="Log In"
          />
          <Button customClassName="bg-btn_orange" text="Start Trading" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
