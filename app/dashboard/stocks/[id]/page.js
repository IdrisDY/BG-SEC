"use client";
import Button from "@/components/button";
import {
  AddIcon,
  ArrowBackIcon,
  ChevronUpIcon,
  HamburgerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  HStack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import DoughnutChart from "@/components/Charts/walletDoughnuts";
import { useTheme } from "styled-components";
import ChartCard from "@/components/Dashboard/chartCard";

const Stock = () => {
  const theme = useTheme();
  const dark = theme.mode === "dark";
  const data = [70, 20, 40];
  const stocks = [
    {
      img: "/onboard/accessbank.png",
      title: "Access Bank",
      price: "$60,000",
      percentChange: "25%",
    },
    {
      img: "/onboard/accessbank.png",
      title: "Access Bank",
      price: "$60,000",
      percentChange: "25%",
    },
    {
      img: "/onboard/accessbank.png",
      title: "Access Bank",
      price: "$60,000",
      percentChange: "25%",
    },
    {
      img: "/onboard/accessbank.png",
      title: "Access Bank",
      price: "$60,000",
      percentChange: "25%",
    },
  ];
  const chartData = [
    { date: "2023-01-01", price: 100 },
    { date: "2023-01-02", price: 105 },
    { date: "2023-01-03", price: 102 },
    { date: "2023-01-04", price: 104 },
    { date: "2023-01-05", price: 108 },
    { date: "2023-01-06", price: 207 },
    { date: "2023-01-07", price: 216 },
    { date: "2023-01-08", price: 200 },
    { date: "2023-01-09", price: 121 },
    { date: "2023-01-10", price: 120 },
    { date: "2023-01-11", price: 123 },
    { date: "2023-01-12", price: 125 },
    { date: "2023-01-13", price: 122 },
    { date: "2023-01-14", price: 226 },
    { date: "2023-01-15", price: 224 },
    { date: "2023-01-16", price: 127 },
    { date: "2023-01-17", price: 129 },
    { date: "2023-01-18", price: 99 },
  ];

  const firstColumnStats = [
    { title: "Dark Range", value: "NGN 8000 - NGN 9000" },
    { title: "Average volume", value: "NGN 8000" },
    { title: "P/E Ratio", value: "1,009.00" },
    { title: "Market Cap", value: "NGN 2500" },
  ];
  const secondColumnStats = [
    { title: "25WRange", value: "NGN 2000 - NGN 4000" },
    { title: "Volume", value: "NGN 8000" },
    { title: "EPS", value: "0.08" },
    { title: "Dividend Yield", value: "0.0%" },
  ];
  const stats = [
    { time: "1h ago", price: "NGN10,000" },
    { time: "2h ago", price: "NGN10,000" },
    { time: "3h ago", price: "NGN10,000" },
    { time: "4h ago", price: "NGN10,000" },
    { time: "5h ago", price: "NGN10,000" },
  ];

  return (
    <div>
      <Button
        text="Back"
        customClassName={` flex mt-10 gap-2 rounded-lg  items-center ${
          dark ? "bg-btn_orange" : "bg-white border border-[#D0D5DD] "
        }`}
      >
        {" "}
        <ArrowBackIcon color={dark ? "white" : "black"} />
      </Button>

      <div
        className={` ${
          dark ? "bg-[#1C1F1F]" : "bg-[#0080800A]"
        } flex mt-6 mb-4 py-2 px-5  rounded-lg justify-between `}
      >
        <div
          className={`${
            dark ? "bg-[#344444]" : "bg-[#FAFFFF]"
          } flex border border-outline_orange rounded-lg py-2 px-4`}
        >
          <img src="/onboard/accessbank.png" alt="stock image" />
          <span> AccessBank </span>
        </div>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            variant="outline"
            border={"none"}
            colorScheme={dark ? "#FD891C" : "bg-white"}
            icon={<BsThreeDotsVertical />}
          />
          <MenuList>
            <MenuItem onClick={() => console.log("Option 1 clicked")}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => console.log("Option 2 clicked")}>
              Option 2
            </MenuItem>
            <MenuItem onClick={() => console.log("Option 3 clicked")}>
              Option 3
            </MenuItem>
          </MenuList>
        </Menu>{" "}
      </div>

      <div
        className={`flex mt-6 flex-col lg:flex-row relative gap-1 lg:gap-1 rounded-lg  w-full   ${
          dark ? "bg- " : "bg-white"
        } border-2 py-7 px-9 rounded-[12px] border-outline_orange`}
      >
        <div className=" flex flex-col gap-[6px] lg:w-3/5">
          <h1 className="font-[600]">Key Stats</h1>

          <div className="flex text-[.9rem] lg:text-[1rem] gap-[80px] ">
            <ul className="flex flex-col gap-5">
              {firstColumnStats.map((item) => {
                return (
                  <li className="flex flex-col gap-1">
                    <h2 className="font-[800] font-[.9rem] "> {item.title} </h2>
                    <p className="text-[#3B4B4B]"> {item.value} </p>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-5">
              {secondColumnStats.map((item) => {
                return (
                  <li className="flex flex-col gap-1">
                    <h2 className="font-[800] font-[.9rem] "> {item.title} </h2>
                    <p className="text-[#3B4B4B]"> {item.value} </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className={`flex lg:w-1/2 mt-6 flex-col h-fit relative gap- lg:gap-2 rounded-lg  w-full   ${
            dark ? " " : ""
          } border-2 py-6 px-5 rounded-[12px] border-outline_orange`}
        >
          <div className="flex justify-between">
            <span>Price</span>
            <span>NGN60,000</span>
          </div>
          <div className="flex font-[800] justify-between">
            <span className="text-[#6B7878]">Today</span>
            <span className="text-[#008080]">
              {" "}
              <ChevronUpIcon /> 25.40%
            </span>
          </div>
          <span className="my-6 text-[#00CC66] ">Available</span>
          <Button
            customClassName="bg-btn_orange w-full text-white"
            text="Buy"
          />
        </div>
      </div>

      {/* Mid Texts */}
      <div
        className={`flex mt-10 mb-4 gap-4 lg:gap-0  flex-col lg:flex-row lg:items-center justify-between`}
      >
        <div
          className={`h-full flex ${
            dark ? "text-default_steps" : "bg-white text-[#344054]"
          } font-[800]`}
        >
          <span
            className={`border-y-2 border-l-2 rounded-tl-lg rounded-bl-lg ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            }  py-[10px] px-4`}
          >
            About
          </span>
          <span
            className={`border-y-2 border-x  ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            } py-[10px] px-4`}
          >
            Financial
          </span>
          <span
            className={`border-y-2 border-r-2 rounded-tr-lg rounded-br-lg  ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            } py-[10px] px-4`}
          >
            News
          </span>
        </div>
        <Button
          customClassName={`flex gap-2 border rounded-lg items-center ${
            dark ? "bg-btn_orange  " : "bg-white  border-[#D0D5DD]"
          }`}
          text="Compare Stocks"
        >
          <AddIcon />
        </Button>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 ">
        <div className=" w-full lg:w-[48%] ">
          <div
            className={` ${
              dark ? "bg-stock_cardsbg" : "bg-white"
            } border-2 justify-center gap-3 px-16 flex flex-col   py-[14px] border-outline_orange rounded-[12.5px]`}
          >
            {/* <DoughnutChart data={data} /> */}
          </div>

          <div className="flex flex-col gap-4">
            <div
              className={`flex mt-8 mb-4 items-center justify-between text-outline_orange font-[700]`}
            >
              <span> Similar Stocks </span>
              <HStack>
                <IconButton
                  aria-label="Left Arrow"
                  icon={<ChevronLeftIcon />}
                  size="sm"
                  border={"1px solid #83796B"}
                  color={"#83796B"}
                  isRound
                  background={"transparent"}
                  onClick={() => console.log("Left arrow clicked")}
                  sx={{
                    _hover: {
                      borderColor: "#FD891C",
                      color: "#FD891C",
                    },
                  }}
                />
                <IconButton
                  aria-label="Right Arrow"
                  icon={<ChevronRightIcon />}
                  size="sm"
                  border={"1px solid #83796B"}
                  color={"#83796B"}
                  isRound
                  background={"transparent"}
                  onClick={() => console.log("Right arrow clicked")}
                  sx={{
                    _hover: {
                      borderColor: "#FD891C",
                      color: "#FD891C",
                    },
                  }}
                />
              </HStack>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              {stocks.map((item) => {
                return <ChartCard item={item} data={chartData} />;
              })}
            </div>
          </div>
        </div>
        <div
          className={` ${
            dark ? "bg-stock_cardsbg" : "bg-white"
          } border-2  w-full lg:w-[52%] min-h-[300px] gap-3 px-4  lg:px-7 flex flex-col py-[24px] border-outline_orange rounded-[12.5px]`}
        >
          <div className="flex flex-col gap-3">
            <span className={`text-btn_orange  font-[700]`}>Stats</span>

            <div className={`flex text-[.9rem] lg:text-[1rem] flex-col gap-4`}>
              {stats.map((item) => {
                return (
                  <div
                    key={item}
                    className={`flex py-5 px-4 ${
                      dark
                        ? "bg-dashboard_cards_bg"
                        : "bg-dashboard_cards_light"
                    } rounded-lg  justify-between gap-2`}
                  >
                    <span> TIME </span>
                    <span className={`font-[500]`}> {item.time}</span>
                    <span>PRICE</span>
                    <span className={`font-[500]`}> {item.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stock;
