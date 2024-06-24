"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import StocksTableComponent from "@/components/Stocks/table";
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
import LineChart from "@/components/Charts/lineChartsStocks";
import { useTheme } from "styled-components";
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

const TopSectors = () => {
  const params = useSearchParams();
  const type = params.get("type");
  const dark = useTheme().mode === "dark";
  const capitaliseFirstLetter = (word) => {
    const t = word[0].toUpperCase();
    const rest = word.slice(1);
    return t + rest;
  };
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

  return (
      <section
        className={`flex border-2 gap-11 rounded-xl ${
          dark ? "border-outline_orange" : "border-transparent bg-white"
        } p-6 mt-8 flex-col`}
      >
        <div
          className={`  flex rounded-[12px] flex-col place-items-center py-[60px] ${
            type === "sports"
              ? "bg-[#D5F9F5]"
              : type === "entertainment"
              ? "bg-[#FF4D4D1A]"
              : type === "transport"
              ? "bg-[#F9A0001A]"
              : "bg-[#B1FF4D33]"
          } `}
        >
          <h2 className=" text-[1.125rem] font-[700]">
            {capitaliseFirstLetter(type)} stocks
          </h2>
          <p className="text-[.9rem]">These are the {type} stocks available</p>
        </div>

        <div className={``}>
          <div
            className={`flex px-2 text-[.9rem] gap-3 lg:text-[1rem] lg:px-0 w-full justify-between`}
          >
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

          <StocksTableComponent columns={columns} data={data} />
        </div>
      </section>
  );
};

export default TopSectors;
