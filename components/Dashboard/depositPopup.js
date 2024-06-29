import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useTheme } from "styled-components";

function DepositPopup() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const dark = useTheme().mode === "dark";

  return (
    <Popover placement="left" borderRadius={"12px"}>
      <PopoverTrigger>
        <Button
          background={"#FD891C"}
          border={dark ? "1px solid #FD891C" : ""}
          color={"white"}
        >
          Deposit
        </Button>
      </PopoverTrigger>
      <PopoverContent
        padding={"10px 18px 32px 18px "}
        border={"none"}
        background={dark ? "#131414" : "white"}
      >
        <PopoverBody padding={"0px"}>
          <PopoverCloseButton />
          <div className="flex items-center justify-between mt-8">
            <span> From: </span>
            <span
              className={` rounded-[30px]  p-2 flex gap-1 ${
                dark
                  ? " border border-outline_orange bg-[#131414]"
                  : "bg-[#00808033]"
              }`}
            >
              <img
                className="rounded-[30px]"
                src="/onboard/accessbank.png"
                alt="bank logo"
              />
              0321434353
            </span>
          </div>

          <div className="flex flex-col mt-6  gap-6">
            <FormControl>
              <FormLabel>Amount to Withdraw</FormLabel>
              <Input
                autoComplete="off"
                background={dark ? "#131414" : "white"}
                border={dark ? "1px solid #FD891C" : "1px solid  #558383B8"}
                placeholder="NGN 0.00"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Pin</FormLabel>
              <Input
                autoComplete="off"
                background={dark ? "#131414" : "white"}
                border={dark ? "1px solid #FD891C" : "1px solid  #558383B8"}
                type="password"
                placeholder="Enter pin"
              />
            </FormControl>
            <Button
              marginTop={"80px"}
              color={"white"}
              backgroundColor={"#DA8E23"}
            >
              Deposit{" "}
            </Button>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default DepositPopup;
