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

function WithdrawPopup() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const dark = useTheme().mode === "dark";

  return (
    <Popover placement="left-start" borderRadius={"12px"}>
      <PopoverTrigger>
        <Button border={dark ? "1px solid #FD891C" : ""}>Withdraw</Button>
      </PopoverTrigger>
      <PopoverContent
        padding={"10px 18px 32px 18px "}
        border={"none"}
        background={dark ? "#131414" : "white"}
      >
        <PopoverBody>
          <PopoverCloseButton />
          <div className="flex items-center justify-between mt-8">
            <span> To: </span>
            <Menu marginInline={"auto 0"} display={"flex"}>
              <MenuButton
                border={dark ? "1px solid #FD891C" : ""}
                background={dark ? "#131414" : "#00808033"}
                as={Button}
                color={dark ? "white" : "#131414"}
                borderRadius={"30px"}
                rightIcon={<ChevronDownIcon />}
              >
                {selectedOption}
              </MenuButton>
              <MenuList
                color={dark ? "white" : "#131414"}
                background={dark ? "#131414" : "#00808033"}
              >
                {["Option 1 ", "Option 2", "Option 3"].map((item) => {
                  return (
                    <MenuItem
                      color={dark ? "white" : "#131414"}
                      background={dark ? "#131414" : "#00808033"}
                      onClick={() => setSelectedOption(item)}
                    >
                      {item}
                    </MenuItem>
                  );
                })}{" "}
              </MenuList>
            </Menu>
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
              Withdraw
            </Button>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default WithdrawPopup;
