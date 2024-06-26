"use client";
import Button from "./button";
import { useTheme } from "styled-components";
import { ToggleThemeContext } from "@/utils/toggleTheme";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setShowModal } from "@/store/LandingPageSlice";
import Marquee from "./marquee";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconButton } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import CustomIconButton from "./CustomIconButton";
const Header = ({ showSignUpModal }) => {
  const theme = useTheme();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isLargeViewport, setIsLargeViewport] = useState(false);
  const { text, toggleTheme } = useContext(ToggleThemeContext);

  const dispatch = useDispatch();
  const dark = useTheme().mode === "dark";
  function handleShowModal() {
    dispatch(setShowModal(true));
  }
  const NavLinks = () => {
    const NavLink = ({ href, text }) => (
      <li>
        <Link href={href}>
          <span
            className={`cursor-pointer ${
              theme.mode === "dark"
                ? "hover:text-outline_orange"
                : "hover:text-[#56A173]"
            }  transition-colors duration-300`}
          >
            {text}
          </span>
        </Link>
      </li>
    );
    const navigationItems = [
      { id: "about-us", text: "About Us" },
      { id: "product", text: "Product" },
      { id: "FAQs", text: "FAQs" },
      { id: "learn", text: "Learn" },
      { id: "contact-us", text: "Contact Us" },
    ];

    console.log(dark);

    return (
      <ul
        className={`flex ${
          theme.mode === "dark" ? "text-white" : "text-light_mainTxt"
        } h-full text-[.9rem] flex-col lg:flex-row justify-center items-center gap-8`}
      >
        {navigationItems.map((item) => (
          <NavLink key={item.id} href={`#${item.id}`} text={item.text} />
        ))}
      </ul>
    );
  };

  const Buttons = () => {
    return (
      <div className="lg:flex-row flex flex-col gap-6 items-center">
        <IconButton
          onClick={toggleTheme}
          icon={theme.img}
          variant={"ghost"}
          sx={{
            _hover: {
              background: "transparent",
            },
          }}
          aria-label="Theme icon change  "
        ></IconButton>
        <Link
          className={`hover:${dark ? "text-outline_orange" : "text-[#56A173]"}`}
          href="/login"
        >
          {" "}
          Log In
        </Link>
        <Button
          onClick={() => handleShowModal()}
          customClassName=" bg-btn_orange"
          text="Start Trading"
          variant="custom-yellow"
        />
      </div>
    );
  };

  // Handle viewport changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 990) {
        setIsLargeViewport(true);
        setIsMenuClicked(false); // Close menu when viewport changes to large
      } else {
        setIsLargeViewport(false);
      }
    };
    handleResize();

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
      <Marquee
        text="        New stock called BOA has just been released. | Dangote stock has
        increased with +0.5. | Stanbic IBTC +2.4
"
      />
      <nav className="flex px-[1.25rem] mt-3 md:mt-6 h-[70px] lg:px-[112px] m-auto justify-between items-center">
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
        <IconButton
          onClick={() => setIsMenuClicked(true)}
          icon={<RxHamburgerMenu color={dark ? "white" : ""} />}
          variant={"ghost"}
          sx={{
            _hover: {
              background: dark ? "#FFFFFF1A" : "#E6F7FF",
            },

            display: isLargeViewport ? "none" : "flex",
          }}
        />
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
            <CustomIconButton
            dark={dark}
              onClick={() => setIsMenuClicked(false)}
              icon={<IoMdClose color={dark ? "white" : "black"} />}
            />
            {isMenuClicked && <NavLinks />}
            {isMenuClicked && <Buttons />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
