"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useTheme } from "styled-components";
import Image from "next/image";
import Button from "../button";
const ProfileDropdown = () => {
  const dark = useTheme().mode === "dark";
  return (
    <Popover>
      <PopoverTrigger>
        <button>
          <ChevronDownIcon color="#83796B" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        borderRadius={"40px 8px 8px 40px"}
        border={"none"}
        background={dark ? "#131414" : "white"}
        width={"fit-content"}
      >
        {/* <PopoverArrow /> */}
        <PopoverCloseButton boxSize={"50px"} />
        <PopoverHeader
          padding={"32px 29px"}
          fontWeight={"700"}
          borderColor={dark ? "#6B7878" : "#CBD1D1"}
          fontSize={"1.125rem"}
          textAlign={"center"}
          color={dark ? "#DA8E23" : ""}
        >
          Profile
        </PopoverHeader>
        <PopoverBody
          paddingTop={"12px"}
          paddingBottom={"32px"}
          paddingInline={"0px"}
        >
          <div className="flex gap-[100px] px-8  mb-8 justify-between flex-row-reverse">
            <div className="flex gap-6 items-end flex-col">
              <div className="h-[100px] relative rounded-[50%]  w-[100px] ">
                <Image
                  layout="fill"
                  src="/Dashboard/avatarDashboard.png"
                  alt="avatar"
                />
              </div>

              <Button
                customClassName="px-3 py-3 whitespace-nowrap "
                text="Upload Image"
                variant="custom-yellow"
              />
            </div>

            <div>
              <div className="flex gap-2  py-4 flex-col">
                <h2 className="font-semibold"> Gabriel Cooper </h2>
                <span className="text-[.9rem]"> gabrielcoper@gmail.com</span>
                <span className="text-[.9rem]"> 08132452338</span>
                <span
                  className={`bg-btn_orange text-center  text-[.9rem] w-fit rounded-[150px] py-2 px-4  ${
                    dark
                      ? "text-white"
                      : "bg-white border text-light_mainTxt border-light_mainTxt"
                  }`}
                >
                  {" "}
                  Unverified{" "}
                </span>
              </div>
            </div>
          </div>

          <div
            className={`flex px-8 border-t ${
              dark ? "border-[#6B7878]" : "border-[#CBD1D1]"
            }   flex-col gap-9 py-10 `}
          >
            <div
              className={` rounded-xl p-4 items-center border-2 ${
                dark
                  ? " bg-aside_onboard border-outline_orange"
                  : " border-[#F2F4F7] shadow-md"
              } flex justify-between`}
            >
              <span>Basic Information</span>
              <button>
                {" "}
                <ChevronRightIcon
                  color={dark ? "#DA8E23" : ""}
                  boxSize={"30px"}
                />{" "}
              </button>
            </div>
            <div
              className={` rounded-xl p-4 items-center border-2 ${
                dark
                  ? " bg-aside_onboard border-outline_orange"
                  : " border-[#F2F4F7] shadow-md"
              } flex justify-between`}
            >
              <span>Account Information</span>
              <button>
                {" "}
                <ChevronRightIcon
                  color={dark ? "#DA8E23" : ""}
                  boxSize={"30px"}
                />{" "}
              </button>
            </div>
            <div
              className={` rounded-xl p-4 items-center border-2 ${
                dark
                  ? " bg-aside_onboard border-outline_orange"
                  : " border-[#F2F4F7] shadow-md"
              } flex justify-between`}
            >
              <button className="text-[#FF0000]">Logout</button>{" "}
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileDropdown;
