"use client";
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
import { useTheme } from "styled-components";
import LineChart from "@/components/Charts/lineChartsStocks";
import StocksTableComponent from "@/components/Stocks/table";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import FilterMenu from "@/components/Dashboard/customFilter";

const AllStocks = () => {
  const dark = useTheme().mode === "dark";
  const chartData = [
    { date: "2023-01-01", price: 99 },
    { date: "2023-01-02", price: 105 },
    { date: "2023-01-03", price: 102 },
    { date: "2023-01-04", price: 108 },
    { date: "2023-01-05", price: 107 },
    { date: "2023-01-06", price: 112 },
    { date: "2023-01-07", price: 106 },
    { date: "2023-01-08", price: 114 },
    { date: "2023-01-09", price: 109 },
    { date: "2023-01-10", price: 115 },
    { date: "2023-01-11", price: 111 },
    { date: "2023-01-12", price: 82 },
    { date: "2023-01-13", price: 80 },
    { date: "2023-01-14", price: 85 },
    { date: "2023-01-15", price: 90 },
    { date: "2023-01-16", price: 95 },
    { date: "2023-01-17", price: 124 },
    { date: "2023-01-18", price: 130 },
    { date: "2023-01-19", price: 125 },
    { date: "2023-01-20", price: 125 },
    { date: "2023-01-21", price: 120 },
    { date: "2023-01-22", price: 120 },
    { date: "2023-01-23", price: 132 },
    { date: "2023-01-24", price: 137 },
    { date: "2023-01-25", price: 135 },
    { date: "2023-01-26", price: 138 },
    { date: "2023-01-27", price: 132 },
    { date: "2023-01-28", price: 135 },
    { date: "2023-01-29", price: 150 },
    { date: "2023-01-30", price: 147 },
    { date: "2023-01-31", price: 205 },
  ];
  const chartData2 = [
    { date: "2023-01-01", price: 130 },
    { date: "2023-01-02", price: 132 },
    { date: "2023-01-03", price: 129 },
    { date: "2023-01-04", price: 135 },
    { date: "2023-01-05", price: 131 },
    { date: "2023-01-06", price: 128 },
    { date: "2023-01-07", price: 130 },
    { date: "2023-01-08", price: 127 },
    { date: "2023-01-09", price: 133 },
    { date: "2023-01-10", price: 128 },
    { date: "2023-01-11", price: 126 },
    { date: "2023-01-12", price: 124 },
    { date: "2023-01-13", price: 129 },
    { date: "2023-01-14", price: 125 },
    { date: "2023-01-15", price: 123 },
    { date: "2023-01-16", price: 127 },
    { date: "2023-01-17", price: 122 },
    { date: "2023-01-18", price: 120 },
    { date: "2023-01-19", price: 124 },
    { date: "2023-01-20", price: 119 },
    { date: "2023-01-21", price: 117 },
    { date: "2023-01-22", price: 121 },
    { date: "2023-01-23", price: 116 },
    { date: "2023-01-24", price: 114 },
    { date: "2023-01-25", price: 119 },
    { date: "2023-01-26", price: 113 },
    { date: "2023-01-27", price: 111 },
    { date: "2023-01-28", price: 115 },
    { date: "2023-01-29", price: 110 },
    { date: "2023-01-30", price: 108 },
    { date: "2023-01-31", price: 105 },
  ];

  const columns = [
    {
      Header: "Stocks",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Checkbox className="rounded-[15px]"></Checkbox>
          <img
            src={value.image}
            alt={value.title}
            className="w-[20px] h-[20px] rounded-[7px] mr-2 "
          />
          <span className="text-left">{value.title}</span>
        </div>
      ),
      width: 200,
    },

    { Header: "Price", accessor: "price", width: 100 },
    {
      Header: "Charts",
      accessor: "charts",
      Cell: ({ cell: { value } }) => (
        <div className="h-[40px]">
          {" "}
          <LineChart trend={value.trend} data={value.chart} />
        </div>
      ),
      width: 300,
    },
    {
      Header: "",
      accessor: "24h",
      Cell: ({ cell: { value } }) => (
        <div
          className={`text-center w-fit items-center font-[500]  justify-center flex gap-1  ${
            value.trend === "up"
              ? "bg-[#B5EFCC30] text-change_green  "
              : dark
              ? "bg-[#FFA19A3D] text-[#B42318]"
              : "bg-[#FEF3F2] text-[#B42318]"
          } rounded-[30px] p-2 `}
        >
          {value.trend === "up" ? (
            <ChevronUpIcon color={"#12B76A"} />
          ) : (
            <ChevronDownIcon color={"red"} />
          )}{" "}
          {value.change}
        </div>
      ),
    },
  ];

  const data = [
    {
      name: {
        title: "GT Bank",
        image: "/Dashboard/GTBank.jpg",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": { trend: "down", change: "+23%" },
      charts: { chart: chartData2, trend: "down" },
    },
    {
      name: {
        title: "Dangote Cement",
        image: "/Dashboard/Dangote_Group_Logo.png",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": { trend: "down", change: "+23%" },
      charts: { chart: chartData2, trend: "down" },
    },
    {
      name: {
        title: "GT Bank",
        image: "/Dashboard/GTBank.jpg",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Dangote Sugar",
        image: "/Dashboard/Dangote_Group_Logo.png",
      },
      price: "₦28000",
      "24h": { trend: "down", change: "+23%" },
      charts: { chart: chartData2, trend: "down" },
    },
    {
      name: {
        title: "GT Bank",
        image: "/Dashboard/GTBank.jpg",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Dangote Sugar",
        image: "/Dashboard/Dangote_Group_Logo.png",
      },
      price: "₦28000",
      "24h": { trend: "down", change: "+23%" },
      charts: { chart: chartData2, trend: "down" },
    },
    {
      name: {
        title: "GT Bank",
        image: "/Dashboard/GTBank.jpg",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Dangote Sugar",
        image: "/Dashboard/Dangote_Group_Logo.png",
      },
      price: "₦28000",
      "24h": { trend: "down", change: "+23%" },
      charts: { chart: chartData2, trend: "down" },
    },
    {
      name: {
        title: "GT Bank",
        image: "/Dashboard/GTBank.jpg",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": { trend: "up", change: "+23%" },
      charts: { chart: chartData, trend: "up" },
    },
    {
      name: {
        title: "Dangote Sugar",
        image: "/Dashboard/Dangote_Group_Logo.png",
      },
      price: "₦28000",
      "24h": { trend: "down", change: "+23%" },
      charts: { chart: chartData2, trend: "down" },
    },
  ];

  return (
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
            <div
              className={` ${
                dark ? "bg-filter_dark_bg" : "bg-transparent"
              } w-4/5`}
            >
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
              <FilterMenu options={["Volume", "Price", "List"]} />{" "}
            </div>
          </div>
        </div>

        <StocksTableComponent
          buttonAction={"buy"}
          columns={columns}
          data={data}
        />
      </div>
    </section>
  );
};

export default AllStocks;
