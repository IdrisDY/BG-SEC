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
const NotificationDropdown = () => {
  const dark = useTheme().mode === "dark";
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Show Notifications"
          variant={"ghost"}
          size={"lg"}
          sx={{
            _hover: {
              background: "transparent",
            },
          }}
          fontSize={"20px"}
          icon={<VscBell color={dark ? "#6B7878" : "#CBD1D1"} size={"20px"} />}
        >
          <ChevronDownIcon color="#83796B" />
        </IconButton>
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
          Notifications
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

export default NotificationDropdown;
