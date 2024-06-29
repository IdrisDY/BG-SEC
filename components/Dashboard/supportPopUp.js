"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  PopoverHeader,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { LuSendHorizonal } from "react-icons/lu";
import { useTheme } from "styled-components";
import Image from "next/image";
import Button from "../button";
import { VscBell } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const SupportPopup = () => {
  const dark = useTheme().mode === "dark";
  const [listItemHovered, setItemListHovered] = useState({
    value: false,
  });
  const [openQuestion, setOpenQuestion] = useState({
    value: false,
    no: 0,
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
  function toggleOpenQuestion(index) {
    setOpenQuestion((prevState) =>
      prevState.no === index
        ? { ...prevState, value: !prevState.value }
        : { value: true, no: index }
    );
  }
  const questions = [
    "What is BGL Securities Ltd?",
    "What markets can I trade on?",
    "BGL Securites Ltd secure?",
    "Do you offer educational services to trader?",
  ];

  return (
    <Popover placement="top-start">
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
          borderBottomWidth={"1px"}
          color={dark ? "#DA8E23" : ""}
        >
          BGL Securities Limited
        </PopoverHeader>
        <PopoverBody paddingBlock={"32px 26px"} paddingInline={"15px"}>
          <div className="flex flex-col font-[800] ">
            <h2 className="text-[1.4rem]">Hi Gabriel! 👋</h2>{" "}
            <p className="text-[1.6rem]">How can we help you ?</p>
          </div>
          <div
            className={`flex ${
              dark ? "" : ""
            }   flex-col gap-2 items-center mt-8 `}
          >
            <InputGroup
              borderRadius={"12px"}
              border={dark ? "none" : ""}
              color={dark ? "white" : ""}
              background={dark ? "#FD891C" : ""}
              width={"100%"}
            >
              <InputRightElement pointerEvents="none">
                <LuSendHorizonal />
              </InputRightElement>
              <Input
                border={dark ? "none" : ""}
                type="tel"
                placeholder="Send us a message"
              />
            </InputGroup>{" "}
            <InputGroup
              borderColor={dark ? "#FD891C" : ""}
              className="mt-[56px]"
              width={"100%"}
            >
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input type="tel" placeholder="Search for help" />
            </InputGroup>{" "}
            <div className="flex mt-6 flex-col gap-6">
              {questions.map((item, i) => {
                const isOnItem = openQuestion.value && openQuestion.no === i;
                return (
                  <div>
                    <div className="flex justify-between items-center">
                      <span>{item}</span>

                      <IconButton
                        onClick={() => toggleOpenQuestion(i)}
                        variant={"ghost"}
                        icon={isOnItem ? <CiCircleMinus /> : <CiCirclePlus />}
                      >
                        {" "}
                      </IconButton>
                    </div>
                    {isOnItem && (
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin sodales metus at odio viverra, ac porttitor lorem
                        consectetur. Nullam tincidunt velit at libero feugiat, a
                        ultricies nunc dictum. Nam bibendum, nunc et convallis
                        lacinia, ex libero sagittis urna, in congue lorem lectus
                        non risus. Suspendisse potenti.
                      </p>
                    )}{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SupportPopup;
