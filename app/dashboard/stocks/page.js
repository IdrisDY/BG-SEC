"use client";
import { useTheme } from "@emotion/react";
import { TopDashboardBoxes } from "../page";
import Button from "@/components/button";
import Image from "next/image";
import { HStack, IconButton } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import LineChart from "@/components/Charts/lineChartsStocks";

const Stocks = () => {
  const theme = useTheme();
  const dark = theme.mode === "dark";
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
  ];
  return (
    <div>
      <TopDashboardBoxes />

      <div
        className={`flex mt-6 flex-col relative text-white gap-4 lg:gap-0 rounded-lg  w-full   ${
          dark ? " " : ""
        } border-2 border-outline_orange`}
      >
        <div className="relative rounded-lg w-full h-[173px]        ">
          <Image
            className="rounded-lg"
            src="/Dashboard/bgstockscardbg.jpg"
            layout="fill"
            alt="stocks"
          />
        </div>
        <div className="flex top-1/2 gap-2 bottom-1/2 justify-center  my-auto flex-col absolute px-5 ">
          <span className={`font-[700]`}>
            Ready to seize opportunities and grow your wealth? It's time to
            embark on an exciting journey into the world of trading{" "}
          </span>
          <Button
            customClassName={`text-white bg-btn_orange`}
            text="Start Trading"
          />
        </div>
      </div>

      <section className="">
        {/* Most Traded Stocks , left,right arrows */}
        <div className="flex items-center justify-between text-outline_orange font-[700] ">
          <span> Most Traded Stocks </span>
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
              onClick={() => console.log("Left arrow clicked")}
              sx={{
                _hover: {
                  borderColor: "#FD891C",
                  color: "#FD891C",
                },
              }}
            />{" "}
          </HStack>
        </div>
        {/* Stocks Cards */}
        <div className="grid  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stocks.map((item) => {
            return (
              <div className="border-2 gap-3 pl-[12px] pr-2 flex flex-col py-[14px] border-outline_orange rounded-[12.5px]">
                <div className="flex  items-center gap-[2px]">
                  <img src={item.img} alt="item logo" />
                  <span className="text-[.8rem]" >{item.title}</span>
                </div>
                <div className="flex  justify-between">
                  <span className="text-[1.3rem] font-[700] " > {item.price} </span>
                  <div className="flex items-end justify-end w-1/5 lg:w-1/2">
                    {" "}
                    <LineChart data={chartData} />
                  </div>
                </div>
                <span className="text-change_green" >
                  {" "}
                  <ChevronUpIcon  color={'#52FF00'} /> {item.percentChange}{" "}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Stocks;
