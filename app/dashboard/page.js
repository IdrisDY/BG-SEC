"use client";
import React, { useContext } from "react";
import Button from "@/components/button";
import { ToggleThemeContext } from "@/utils/toggleTheme";
import Image from "next/image";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import TableComponent from "@/components/Dashboard/table";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ToggleThemeContext);
  const portfolioCards = [
    { title: "NGN Portfolio", color: "#E5C162", value: `₦0.0` },
    { title: "USD Portfolio", color: "#E7EB34CC", value: `$0.0` },
    { title: "My cash balance ", color: "#CCF066", value: `₦0.0` },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={value.image}
            alt={value.title}
            style={{
              width: 30,
              height: 30,
              borderRadius: "7px",
              marginRight: 10,
            }}
          />
          <span>{value.title}</span>
        </div>
      ),
    },
    { Header: "Price", accessor: "price" },
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
  ];
  return (
    <div className=" ">
      <section className="flex flex-col gap-4">
        <div className="flex rounded-lg py-[18px] px-5 items-center justify-between w-full border-2 border-outline_orange bg-dashboard_cards_bg">
          <span className="font-[700]">
            Kindly proceed with your account verification for proper trading.
          </span>
          <Button customClassName="bg-btn_orange" text="Verify Account" />
        </div>
        <div className="flex rounded-lg py-[18px] px-5 items-center justify-between w-full border-2 border-outline_orange bg-dashboard_cards_bg">
          <div>
            <span className="text-outline_orange font-[700]">
              Market Closing Hours:{" "}
            </span>
          </div>
          <div>
            <button className="w-[30px] h-[30px]" onClick={toggleTheme}>
              <img src={theme.img} alt={theme.mode} />
            </button>
          </div>
          <Button customClassName="bg-btn_orange" text="Verify Account" />
        </div>
      </section>
      <section className="grid py-[14px] gap-4 text-font_black mt-[24px] grid-cols-3">
        {portfolioCards.map((item) => (
          <div
            key={item.title}
            className="border h-[135px] border-outline_orange rounded-lg p-4"
            style={{ backgroundColor: item.color }}
          >
            <span>{item.title}</span>
            <div className="flex items-center justify-between">
              <span className="text-[1.8rem]">{item.value}</span>
              <button className="relative w-[20px] h-[20px]">
                <Image
                  src="/Dashboard/eye.svg"
                  layout="fill"
                  alt="see balance"
                />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className=" mt-[24px]">
        <div className="flex flex-col gap-6 w-[52%]">
          <div className="border flex flex-col gap-5 bg-aside_onboard p-6 rounded-lg border-outline_orange">
            <div className="flex w-full justify-between">
              <span className="text-outline_orange">Top Gainers</span>
              <button className="text-dashboard_green_80">
                View All Stocks
              </button>
            </div>

            <div className="flex gap-4">
              <div className="w-4/5">
                <InputGroup size="md">
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input type="tel" placeholder="Search for anything" />
                </InputGroup>
              </div>
              <div className="w-1/5">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                  ></InputLeftElement>
                  <Select placeholder="Filter">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </InputGroup>
              </div>
            </div>

            <TableComponent columns={columns} data={data} />
          </div>

          {/* Market News */}
          <div className="border flex flex-col gap-5 bg-aside_onboard p-6 rounded-lg border-outline_orange">
            <div className="flex w-full justify-between">
              <span className="text-outline_orange">Market News</span>
              <button className="text-dashboard_green_80">Show More</button>
            </div>

            <div className="flex flex-col gap-5">
              {marketNews.map((item) => {
                return (
                  <div className="flex bg-dashboard_cards_bg rounded-lg gap-4 p-3">
                    <div className="relative w-1/2 h-[100px]">
                      <Image
                        src="/blogImg.png"
                        alt="news image"
                        layout="fill"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <small className="text-btn_orange text-[.8rem]">
                        {" "}
                        {item.type}{" "}
                      </small>
                      <span> {item.title} </span>
                      <span className="text-[.8rem]"> {item.shortText} </span>
                      <span className="text-[.8rem]"> {item.date} </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[48%]"></div>
      </section>
    </div>
  );
};

export default Dashboard;
