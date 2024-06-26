"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useTheme } from "styled-components";
import Image from "next/image";
import Button from "../button";
import { VscBell } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";
import { useState } from "react";
const SupportPopup = () => {
  const dark = useTheme().mode === "dark";
  const [listItemHovered, setItemListHovered] = useState({
    value: false,
  });
  const transitionDuration = "500ms";
  function handleSvgColorChange(item) {
    setTimeout(() => {
      setItemListHovered({ value: true });
    }, transitionDuration);
  }
  function handleLeaveHoverOnListItem() {
    setItemListHovered({
      value: false,
    });
  }

  return (
    <Popover>
      <PopoverTrigger>
        <button
          className={`w-full flex px-3 ${
            listItemHovered.value ? "bg-btn_orange text-white" : ""
          } py-2 gap-3 text-default_steps hover:text-white rounded-[6px] cursor-pointer transition-all duration-[${transitionDuration}] hover:bg-btn_orange`}
          onMouseOut={handleLeaveHoverOnListItem}
          onMouseOver={() => handleSvgColorChange()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
              stroke={listItemHovered.value ? "white" : "#83796B"}
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 10.0385C10.5 9.18879 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.18879 13.5 10.0385C13.5 10.3447 13.4127 10.6301 13.2623 10.8698C12.8141 11.5844 12 12.2657 12 13.1154V13.5"
              stroke={listItemHovered.value ? "white" : "#83796B"}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12 15.5H12.009"
              stroke={listItemHovered.value ? "white" : "#83796B"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Support
        </button>
      </PopoverTrigger>
      <PopoverContent
        borderRadius={"8px"}
        boxShadow={dark ? "" : "0 2px 4px rgba(0, 0, 0, 0.1)"}
        border={"none"}
        background={dark ? "#131414" : "white"}
        width={"450px"}
      >
        {/* <PopoverArrow /> */}
        <PopoverCloseButton boxSize={"50px"} />
        <PopoverHeader
          padding={"32px 29px"}
          fontWeight={"700"}
          borderColor={dark ? "#6B7878 " : "#CBD1D1"}
          fontSize={"1.125rem"}
          textAlign={"center"}
          borderBottomWidth={"1px"}
          color={dark ? "#DA8E23" : ""}
        >
          BGL Securities Limited
        </PopoverHeader>
        <PopoverBody
          paddingTop={"12px"}
          paddingBottom={"32px"}
          paddingInline={"0px"}
        >
          <div className="flex font-[800]  px-8 py-[18px] justify-between ">
            <div className="flex items-center  gap-6 ">
              <button>All</button>
              <button>Unread</button>
            </div>

            <button>Mark all as read</button>
          </div>

          <div
            className={`flex px-8 border-t ${
              dark ? "border-[#6B7878]" : "border-[#CBD1D1]"
            }   flex-col gap-2 items-center py-10 `}
          >
            <div className="relative w-[200px] h-[200px] ">
              <Image
                src="/Dashboard/nonotifs.png"
                layout="fill"
                alt="no notifications image"
              />
            </div>

            <span>Oops! no notification yet</span>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SupportPopup;
