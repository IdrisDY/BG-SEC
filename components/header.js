"use client";
import Button from "./button";
import { useTheme } from "styled-components";
import { ToggleThemeContext } from "@/app/utils/toggleTheme";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const theme = useTheme();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isLargeViewport, setIsLargeViewport] = useState(
    false
  ); // Assuming initial state is large viewport
  const { text, toggleTheme } = useContext(ToggleThemeContext);

  const NavLinks = () => {
    return (
      <ul
        className={`flex ${
          theme.mode === "dark" ? "text-white" : "text-light_mainTxt"
        } h-full text-[.9rem] flex-col lg:flex-row justify-center items-center gap-8`}
      >
        <li>About Us</li>
        <li>Product</li>
        <li>FAQs</li>
        <li>Learn</li>
        <li>Contact Us</li>
      </ul>
    );
  };

  const Buttons = () => {
    return (
      <div className="lg:flex gap-6 items-center">
        <button className="w-[30px] h-[30px]" onClick={toggleTheme}>
          <img src={theme.img} alt={theme.mode} />
        </button>
        <Button
          customClassName=""
          variant={theme.mode === "dark" ? "black" : "white"}
          text="Log In"
        />
        <Button customClassName="bg-btn_orange" text="Start Trading" />
      </div>
    );
  };

  // Handle viewport changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeViewport(true);
        setIsMenuClicked(false); // Close menu when viewport changes to large
      } else {
        setIsLargeViewport(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`top-0 ${
        theme.mode === "dark" ? "bg" : "bg-hero_section_bg"
      } w-full `}
    >
      <marquee
        behavior="scroll"
        height="40px"
        style={{ color: "white" }}
        bgColor={
          "linear-gradient(90deg, #D01313 0%, #8D1D0C 30.5%, #BE3206 56%, #A52222 100%)"
        }
        direction="left"
      >
        New stock called BOA has just been released.| Dangote stock has
        increased with +0.5. | Stanbic IBTC +2.4
      </marquee>

      <nav className="flex px-[1.25rem] h-[70px] lg:px-[112px] m-auto justify-between items-center">
        <div className="w-[58%] lg:w-1/5 flex items-center ">
          <img
            src={`${
              theme.mode === "dark" ? "/logo.svg" : "bgl_logo_light.svg"
            }`}
            alt="logo"
          />
        </div>

        <div
          className={`hidden lg:flex h-full items-center ${
            !isLargeViewport && !isMenuClicked ? "hidden" : ""
          }`}
        >
          <NavLinks />
        </div>

        <button
          onClick={() => setIsMenuClicked(true)}
          className={`relative flex lg:hidden h-[20px] w-[21px] ${
            isLargeViewport ? "hidden" : ""
          }`}
        >
          <Image layout="fill" src="/align-justify.svg" alt="menu button" />
        </button>

        {!isMenuClicked && isLargeViewport && <Buttons />}
      </nav>

      {isMenuClicked && (
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end transition-transform transform ${
            isMenuClicked ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className={`w-3/4 max-w-xs ${
              theme.mode === "dark" ? "bg-font_black" : "bg-white"
            } h-full shadow-xl flex flex-col p-5 transition-transform transform ${
              isMenuClicked ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsMenuClicked(false)}
              className="self-end mb-5"
            >
              <Image
                width={24}
                height={24}
                src="/x.svg"
                alt="close button"
              />
            </button>
            {isMenuClicked && <NavLinks />}
            {isMenuClicked && <Buttons />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
