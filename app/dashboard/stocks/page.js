"use client";
import { TopDashboardBoxes } from "../page";
import Button from "@/components/button";
import Image from "next/image";
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
import LineChart from "@/components/Charts/lineChartsStocks";
import StocksTableComponent from "@/components/Stocks/table";

const Stocks = () => {
  const theme = useTheme();
  const dark = theme.mode === "dark";
  console.log(dark);
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
    { date: "2023-01-06", price: 107 },
    { date: "2023-01-07", price: 110 },
    { date: "2023-01-08", price: 112 },
    { date: "2023-01-09", price: 115 },
    { date: "2023-01-10", price: 113 },
    { date: "2023-01-11", price: 117 },
    { date: "2023-01-12", price: 116 },
    { date: "2023-01-13", price: 100 },
    { date: "2023-01-14", price: 121 },
    { date: "2023-01-15", price: 120 },
    { date: "2023-01-16", price: 123 },
    { date: "2023-01-17", price: 125 },
    { date: "2023-01-18", price: 122 },
    { date: "2023-01-19", price: 126 },
    { date: "2023-01-20", price: 124 },
    { date: "2023-01-21", price: 127 },
    { date: "2023-01-22", price: 129 },
    { date: "2023-01-23", price: 99 },
  ];
  const columns = [
    {
      Header: "Stocks",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox></Checkbox>
          <img
            src={value.image}
            alt={value.title}
            className="w-[20px] h-[20px] rounded-[7px] mr-2 "
          />
          <span className="text-left">{value.title}</span>
        </div>
      ),
    },
    { Header: "Price", accessor: "price" },
    {
      Header: "Charts",
      accessor: "charts",
      Cell: ({ cell: { value } }) => (
        <div className="h-[40px]">
          {" "}
          <LineChart data={chartData} />
        </div>
      ),
    },
    { Header: "24H change", accessor: "24h" },
  ];

  const data = [
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "$28000",
      "24h": "+23%",
    },
  ];
  const marketNews = [
    {
      type: "Investment",
      title: "Building your portfolio",
      shortText:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      date: "15 Jan 2022",
    },
    {
      type: "Investment",
      title: "Building your portfolio",
      shortText:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      date: "15 Jan 2022",
    },
    {
      type: "Investment",
      title: "Building your portfolio",
      shortText:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      date: "15 Jan 2022",
    },
    {
      type: "Investment",
      title: "Building your portfolio",
      shortText:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      date: "15 Jan 2022",
    },
  ];

  return (
    <div className="py-8">
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
        <div
          className={`flex mt-8 mb-4 items-center justify-between text-outline_orange font-[700]`}
        >
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
        {/* Stocks Cards */}
        <div className={`grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
          {stocks.map((item, i) => {
            return (
              <div
                className={` ${
                  dark ? "bg-stock_cardsbg" : "bg-white"
                } border-2 gap-3 pl-[12px] pr-2 flex flex-col py-[14px] border-outline_orange rounded-[12.5px]`}
                key={i + 1}
              >
                <div className={`flex items-center gap-[2px]`}>
                  <img src={item.img} alt="item logo" />
                  <span className={`text-[.8rem]`}>{item.title}</span>
                </div>
                <div className={`flex justify-between`}>
                  <span className={`text-[1.3rem] font-[700]`}>
                    {item.price}
                  </span>
                  {/* Chart Section */}
                  <div
                    className={`flex items-end h-[40px] justify-end w-3/5 lg:w-1/2`}
                  >
                    <LineChart data={chartData} />
                  </div>
                </div>
                <span className={`text-change_green`}>
                  <ChevronUpIcon color={"#52FF00"} /> {item.percentChange}
                </span>
              </div>
            );
          })}
        </div>

        {/* Table Section */}
        <section>
          <div
            className={`border-2 my-8 flex flex-col gap-5 ${
              dark ? "bg-[#121D1D]" : "bg-white"
            }  px-2 py-4 lg:p-6 rounded-[10px] border-outline_orange`}
          >
            <div
              className={`flex px-2 text-[.9rem] lg:text-[1rem] lg:px-0 w-full justify-between`}
            >
              <span className={`text-outline_orange`}>All Stocks</span>
              <div className={`flex lg:w-3/5 px-2 lg:px-0 gap-4`}>
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
            </div>

            <StocksTableComponent columns={columns} data={data} />
          </div>
        </section>

        {/* Market News */}
        <div
          className={`border-2 flex flex-col gap-5 ${
            dark ? "bg-aside_onboard" : "bg-white"
          } p-6 rounded-lg border-outline_orange`}
        >
          <div
            className={`flex w-full text-[.9rem] lg:text-[1rem] justify-between`}
          >
            <span className={` font-[700] text-outline_orange`}>
              Market News
            </span>
            <button className={`font-[800] text-dashboard_green_80`}>
              Show More
            </button>
          </div>
          {/* News List */}
          <div className={`grid lg:grid-cols-2 gap-5`}>
            {marketNews.map((item) => {
              return (
                <div
                  className={`flex flex-col lg:flex-row ${
                    dark ? "bg-dashboard_cards_bg" : "bg-dashboard_cards_light"
                  } rounded-lg gap-4 p-3`}
                  key={item.id}
                >
                  <div className={`relative lg:w-1/2  h-[200px] lg:h-[100px]`}>
                    <Image src="/blogImg.png" alt="news image" layout="fill" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <small className="text-btn_orange text-[.8rem]">
                      {item.type}
                    </small>
                    <h3 className="font-[800]">{item.title}</h3>
                    <p className="text-[.8rem]">{item.shortText}</p>
                    <time dateTime={item.date} className="text-[.8rem]">
                      {item.date}
                    </time>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stocks;
