"use client";
import Button from "@/components/button";
import {
  AddIcon,
  ChevronUpIcon,
  HamburgerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  Select,
  MenuItem,
  MenuList,
  MenuButton,
  HStack,
  InputGroup,
  Input,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";
import StocksTableComponent from "@/components/Stocks/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import DoughnutChart from "@/components/Charts/walletDoughnuts";
import { useTheme } from "styled-components";
import ChartCard from "@/components/Dashboard/chartCard";
import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import LineChart from "@/components/Charts/lineChartsStocks";
import AboutStocksChart from "@/components/Charts/StockAboutsChart";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/Dashboard/goBack";
import CompareStocksChart from "@/components/Charts/compareStocKCharts";

const Stock = () => {
  const theme = useTheme();
  const dark = theme.mode === "dark";
  const [stockDetailsInView, setStockDetailsInView] = useState("About");
  const [compareStocks, setCompareStocks] = useState(false);
  const [compareStocksData, setCompareStocksData] = useState(null);

  const doughnutData = [70, 20, 40];
  const router = useRouter();
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
  // const chartData = [
  //   { date: "2023-01-01", price: 99 },
  //   { date: "2023-01-02", price: 105 },
  //   { date: "2023-01-03", price: 102 },
  //   { date: "2023-01-04", price: 108 },
  //   { date: "2023-01-05", price: 107 },
  //   { date: "2023-01-06", price: 112 },
  //   { date: "2023-01-07", price: 106 },
  //   { date: "2023-01-08", price: 114 },
  //   { date: "2023-01-09", price: 109 },
  //   { date: "2023-01-10", price: 115 },
  //   { date: "2023-01-11", price: 111 },
  //   { date: "2023-01-12", price: 82 },
  //   { date: "2023-01-13", price: 80 },
  //   { date: "2023-01-14", price: 85 },
  //   { date: "2023-01-15", price: 90 },
  //   { date: "2023-01-16", price: 95 },
  //   { date: "2023-01-17", price: 124 },
  //   { date: "2023-01-18", price: 130 },
  //   { date: "2023-01-19", price: 125 },
  //   { date: "2023-01-20", price: 125 },
  //   { date: "2023-01-21", price: 120 },
  //   { date: "2023-01-22", price: 120 },
  //   { date: "2023-01-23", price: 132 },
  //   { date: "2023-01-24", price: 137 },
  //   { date: "2023-01-25", price: 135 },
  //   { date: "2023-01-26", price: 138 },
  //   { date: "2023-01-27", price: 132 },
  //   { date: "2023-01-28", price: 135 },
  //   { date: "2023-01-29", price: 150 },
  //   { date: "2023-01-30", price: 147 },
  //   { date: "2023-01-31", price: 205 },
  // ];
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
  const topSector = [
    { title: "Entertainment", text: "There are stocks are often distributed" },
    { title: "Sports", text: "There are stocks are often distributed" },
    { title: "Entertainment", text: "There are stocks are often distributed" },
    { title: "Entertainment", text: "There are stocks are often distributed" },
    { title: "Entertainment", text: "There are stocks are often distributed" },
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
  const data1 = [
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

  const data2 = [
    { date: "2023-01-01", price: 200 },
    { date: "2023-01-02", price: 215 },
    { date: "2023-01-03", price: 190 },
    { date: "2023-01-04", price: 220 },
    { date: "2023-01-05", price: 230 },
    { date: "2023-01-06", price: 210 },
    { date: "2023-01-07", price: 240 },
    { date: "2023-01-08", price: 200 },
    { date: "2023-01-09", price: 250 },
    { date: "2023-01-10", price: 230 },
    { date: "2023-01-11", price: 260 },
    { date: "2023-01-12", price: 240 },
    { date: "2023-01-13", price: 190 },
    { date: "2023-01-14", price: 270 },
    { date: "2023-01-15", price: 260 },
    { date: "2023-01-16", price: 280 },
    { date: "2023-01-17", price: 250 },
    { date: "2023-01-18", price: 270 },
    { date: "2023-01-19", price: 260 },
    { date: "2023-01-20", price: 280 },
    { date: "2023-01-21", price: 290 },
    { date: "2023-01-22", price: 300 },
    { date: "2023-01-23", price: 220 },
  ];

  const isAboutView = stockDetailsInView === "About";
  const isFinancialsView = stockDetailsInView === "Financials";
  const isNewsView = stockDetailsInView === "News";
  function handleStockData(data) {
    console.log(data);
    setCompareStocksData(data);
  }

  const About = () => {
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

    return (
      <section className="flex flex-col gap-10">
        <div
          className={`flex lg:h-[300px] flex-col relative gap-3 rounded-[12px]  w-full   ${
            dark ? "bg- " : "bg-white"
          } border-2 px-6 pt-6 rounded-[12px] border-outline_orange`}
        >
          <AboutStocksChart data={chartData} />
        </div>
        <div className="flex flex-col lg:flex-row gap-7 ">
          <div
            className={`flex lg:w-3/5 flex-col relative gap-3 rounded-lg  w-full   ${
              dark ? "bg- " : "bg-white"
            } border-2 py-7 px-9 rounded-[12px] border-outline_orange`}
          >
            {/* Article Text */}
            <article className="flex flex-col gap-3">
              <h3
                className={`font-[700]  ${
                  dark ? "text-outline_orange" : "text-light_subhead"
                } `}
              >
                About
              </h3>
              <p>
                Dangote stock is a multinational technology company known for
                its consumer electronics, software, and digital services. It is
                one of the world's largest technology companies. Apple Inc. is a
                multinational technology company known for its consumer
                electronics, software, and digital services. It is one of the
                world's largest technology companies.Apple Inc. is a
                multinational technology company known for its consumer
                electronics, software, and digital services. It is one of the
                world's largest technology companies. Apple Inc. is a
                multinational technology company known for its consumer
                electronics, software, and digital services. It is one of the
                world's largest technology companies.
              </p>
            </article>
            <article className="flex flex-col gap-3">
              <h3
                className={`font-[700]  ${
                  dark ? "text-outline_orange" : "text-light_subhead"
                } `}
              >
                Our Vision
              </h3>
              <p>
                Dangote stock s a multinational technology company known for its
                consumer electronics, software, and digital services. It is one
                of the world's largest technology companies. Apple Inc. is a
                multinational technology company known for its consumer
                electronics, software, and digital services. It is one of the
                world's largest technology companies.rgest technology companies.{" "}
              </p>
            </article>
          </div>
          {/* Featured In */}
          <div
            className={`border-2 lg:w-2/5 flex flex-col gap-5 ${
              dark ? "bg-aside_onboard" : "bg-white"
            } p-6 rounded-lg border-outline_orange`}
          >
            <span
              className={`text-btn_orange text-[.9rem] lg:text-[1rem] font-[700]`}
            >
              Featured In
            </span>

            <div className={`flex flex-col gap-4`}>
              {topSector.map((item) => {
                return (
                  <div
                    key={item}
                    className={`flex py-5 px-4 ${
                      dark
                        ? "bg-dashboard_cards_bg"
                        : "bg-dashboard_cards_light"
                    } rounded-lg flex-col gap-2`}
                  >
                    <span className={`font-[700]`}> {item.title}</span>
                    <span> {item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Financials = () => {
    return (
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
    );
  };
  const News = () => {
    return (
      <div>
        <div
          className={`border-2 my-8 flex flex-col gap-5 ${
            dark ? "bg-aside_onboard" : "bg-white"
          }  px-2 py-4 lg:p-6 rounded-[10px] border-outline_orange`}
        >
          <div
            className={`flex px-2 ${
              dark ? "bg-[#121D1D]" : "bg-[]"
            } text-[.9rem] lg:text-[1rem] lg:px-0 w-full justify-between`}
          >
            <span className={`text-outline_orange font-[500] `}>
              Market News
            </span>
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

          {/* News Grid */}
          <div className={`grid lg:grid-cols-3 gap-5`}>
            {marketNews.map((item) => {
              return (
                <div
                  className={`flex flex-col ${
                    dark ? "" : "bg-dashboard_cards_light"
                  } rounded-lg gap-4 p-3`}
                  key={item.id}
                >
                  <div className={`relative rounded-lg  h-[150px]`}>
                    <Image
                      className="rounded-t-[12px]  "
                      src="/blogImg.png"
                      alt="news image"
                      layout="fill"
                    />
                    <div className=" w-full flex justify-between bg-[#00000000] p-[11px] bg-opacity-100 backdrop-blur-sm  text-[.8rem] absolute bottom-0">
                      <span className="flex font-[600] flex-col ">
                        Land Steiner
                        <time className=" text-[.7rem] font-[400]">
                          {" "}
                          15 Jan 2022{" "}
                        </time>
                      </span>

                      <span className="font-[600]">Portfolio</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-[600]">{item.title}</h3>
                    <p className="text-[.8rem]">{item.shortText}</p>
                    <button
                      dateTime={item.date}
                      className="flex gap-1 mt-4 text-dashboard_green_80 w-fit text-[.8rem]"
                    >
                      Read Post <FiArrowUpRight color="#11BC74" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <GoBackButton />
      {!compareStocks ? (
        <section>
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
                        <h2 className="font-[800] font-[.9rem] ">
                          {" "}
                          {item.title}{" "}
                        </h2>
                        <p className={`  ${dark ? "white" : "text-[#3B4B4B]"}`}>
                          {" "}
                          {item.value}{" "}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <ul className="flex flex-col gap-5">
                  {secondColumnStats.map((item) => {
                    return (
                      <li className="flex flex-col gap-1">
                        <h2 className="font-[800] font-[.9rem] ">
                          {" "}
                          {item.title}{" "}
                        </h2>
                        <p className={`  ${dark ? "white" : "text-[#3B4B4B]"}`}>
                          {" "}
                          {item.value}{" "}
                        </p>
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
                variant="custom-yellow"
              />
              <Button
                customClassName="border mt-2 border-outline_orange w-full"
                text="Sell"
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
              <button
                onClick={() => setStockDetailsInView("About")}
                className={`   ${
                  isAboutView && dark
                    ? "bg-btn_orange text-white"
                    : isAboutView && !dark
                    ? "bg-[#F9FAFB]"
                    : ""
                }  border-y-2 border-l-2 rounded-tl-lg rounded-bl-lg ${
                  dark ? "border-outline_orange" : "border-[#D0D5DD]"
                }  py-[10px] px-4`}
              >
                About
              </button>
              <button
                onClick={() => setStockDetailsInView("Financials")}
                className={`border-y-2 border-x  ${
                  dark ? "border-outline_orange" : "border-[#D0D5DD]"
                } ${
                  isFinancialsView && dark
                    ? "bg-btn_orange text-white "
                    : isFinancialsView && !dark
                    ? "bg-[#F9FAFB]"
                    : ""
                } py-[10px] px-4`}
              >
                Financial
              </button>
              <button
                onClick={() => setStockDetailsInView("News")}
                className={`border-y-2 border-r-2 rounded-tr-lg rounded-br-lg  ${
                  dark ? "border-outline_orange" : "border-[#D0D5DD]"
                } ${
                  isNewsView && dark
                    ? "bg-btn_orange text-white"
                    : isNewsView && !dark
                    ? "bg-[#F9FAFB]"
                    : ""
                } py-[10px] px-4`}
              >
                News
              </button>
            </div>
            <Button
              onClick={() => setCompareStocks(true)}
              customClassName={`flex gap-2 border rounded-lg items-center ${
                dark ? "bg-btn_orange  " : "bg-white  border-[#D0D5DD]"
              } `}
              text="Compare Stocks"
            >
              <AddIcon />
            </Button>
          </div>
          {isAboutView ? (
            <About />
          ) : isFinancialsView ? (
            <Financials />
          ) : isNewsView ? (
            <News />
          ) : null}
        </section>
      ) : compareStocks && !compareStocksData ? (
        <div>
          <div
            className={` ${
              dark ? "bg-[#1F2C2C]" : "bg-[#0080800A]"
            } flex mt-6 mb-4 py-4 px-16  rounded-lg justify-between `}
          >
            <div
              className={`${
                dark ? "bg-[#344444]" : "bg-[#FAFFFF]"
              } flex border border-outline_orange rounded-lg py-2 px-4`}
            >
              <img src="/onboard/accessbank.png" alt="stock image" />
              <span> AccessBank </span>
            </div>

            <div className="flex flex-col">
              <span>NGN 10,0000</span>
              <span className="text-change_green">Available</span>
            </div>
          </div>

          {/* Table component */}
          <div
            className={`border-2 my-8 flex flex-col gap-5 ${
              dark ? "bg-[#121D1D]" : "bg-white"
            }  px-2 py-4 lg:p-6 rounded-[10px] border-outline_orange`}
          >
            <div
              className={`flex px-2 text-[.9rem] lg:text-[1rem] lg:px-0 w-full justify-between`}
            >
              <div className={`flex w-full px-2 lg:px-0 gap-4`}>
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
                      <option value="option1">Volume</option>
                      <option value="option2">Price</option>
                      <option value="option3">List </option>
                    </Select>
                  </InputGroup>
                </div>
              </div>
            </div>

            <StocksTableComponent
              buttonAction="compare"
              columns={columns}
              data={data}
              buttonClicked={handleStockData}
            />
          </div>
        </div>
      ) : compareStocksData ? (
        <div>
          <div>
            <div
              className={` ${
                dark ? "bg-[#1F2C2C]" : "bg-[#0080800A]"
              } flex mt-6 mb-4 py-4 px-16 justify-center items-center  rounded-lg gap-16 `}
            >
              <div
                className={`${
                  dark ? "bg-[#344444]" : "bg-[#FAFFFF]"
                } flex flex-col items-center w-[150px] r rounded-lg py-2 px-4`}
              >
                <img
                  className="w-[50px] h-[50px] rounded-lg"
                  src="/onboard/accessbank.png"
                  alt="stock image"
                />
                <span> AccessBank </span>
                <span> 40000 </span>
                <span> +30%</span>
              </div>
              <span className="text-xl"> VS </span>
              <div
                className={`${
                  dark ? "bg-[#F9FF0024]" : "bg-[#FAFFFF]"
                } flex  flex-col items-center w-[150px] rounded-lg py-2 px-4`}
              >
                <img
                  className="w-[50px] h-[50px] rounded-lg"
                  src={compareStocksData?.name?.image}
                  alt="stock image"
                />
                <span className="text-center">
                  {" "}
                  {compareStocksData?.name?.title}{" "}
                </span>
                <span> {compareStocksData?.price} </span>
                <span> {compareStocksData["24h"].change} </span>
              </div>
            </div>

            <div
              className={`border-2 my-8 flex flex-col gap-5 ${
                dark ? "bg-[#121D1D]" : "bg-white"
              }  px-2 py-4 lg:p-6 rounded-[10px] border-outline_orange`}
            >
              <div
                className={`flex px-2 text-[.9rem] lg:text-[1rem] lg:px-0 w-full justify-between`}
              >
                <CompareStocksChart data1={data1} data2={data2} />
              </div>
            </div>

            <div
              className={` ${
                dark ? "bg-stock_cardsbg" : "bg-white"
              } border-2  w-full lg:w-full min-h-[300px] gap-3 px-4  lg:px-7 flex flex-col py-[24px] border-outline_orange rounded-[12.5px]`}
            >
              <div className="flex flex-col gap-3">
                <span className={`text-btn_orange  font-[700]`}>Stats</span>

                <div
                  className={`flex text-[.9rem] lg:text-[1rem] flex-col gap-4`}
                >
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
                        <span> OPEN</span>
                        <span>NGN 35,000</span>
                        <span
                          className={` ${
                            dark ? "text-change_green" : "text-[#779C2E]"
                          } font-[500]`}
                        >
                          {" "}
                          NGN 35,000{" "}
                        </span>
                        <span>VOLUME</span>

                        <span className={`font-[500]`}> {item.price}</span>
                        <span
                          className={` ${
                            dark ? "text-change_green" : "text-[#779C2E]"
                          } font-[500]`}
                        >
                          {" "}
                          {item.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
};

export default Stock;
