"use client";
import DoughnutChart from "@/components/Charts/walletDoughnuts";
import PortfolioCards from "@/components/Dashboard/portfolioCards";
import Button from "@/components/button";
import { useTheme } from "styled-components";
import {
  HStack,
  Select,
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import WithdrawPopup from "@/components/Dashboard/withdrawPopup";
import DepositPopup from "@/components/Dashboard/depositPopup";

const DashboardWallet = () => {
  const theme = useTheme();
  const dark = theme.mode === "dark";
  const data = [70, 20, 40];
  return (
    <div>
      {/* Portfolio Cards Section */}
      <PortfolioCards />
      <div className=" flex justify-end">
        <div className="flex w-1/2 justify-end  gap-5 relative">
          <DepositPopup />
          <WithdrawPopup />
        </div>
      </div>

      <section className="flex flex-col lg:flex-row mt-6  gap-6">
        <div
          className={` ${
            dark ? "bg-stock_cardsbg" : "bg-white"
          } border-2 w-full lg:w-[48%] justify-center gap-3 px-16 flex flex-col py-[14px] border-outline_orange rounded-[12.5px]`}
        >
          <div className="flex justify-center items-center">
            <DoughnutChart data={data} />
          </div>
        </div>
        <div
          className={` ${
            dark ? "bg-stock_cardsbg" : "bg-white"
          } border-2  w-full lg:w-[52%] min-h-[300px] gap-3 px-7 flex flex-col py-[24px] border-outline_orange rounded-[12.5px]`}
        >
          <div className={`flex px-2 lg:px-0 gap-4`}>
            <div className={`w-4/5`}>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  borderWidth={"2px"}
                  borderColor={"#FD891C"}
                  type="tel"
                  placeholder="Search for anything"
                />
              </InputGroup>
            </div>
            <div className={`w-1/5`}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                ></InputLeftElement>
                <Select border={"2px solid #FD891C"} placeholder="Filter">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </InputGroup>
            </div>
          </div>
          <div className="flex flex-col my-10 items-center">
            <div className="relative flex items-center w-[200px] h-[200px] ">
              <Image
                layout="fill"
                src="/Dashboard/emptystateBank.png"
                alt="empty State"
              />
            </div>
            <span className="text-center"> Sorry, no transactions yet.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardWallet;
