"use client";
import React, { useEffect, useState, useContext } from "react";
import Button from "@/components/button";
import { ToggleThemeContext } from "@/utils/toggleTheme";
import Image from "next/image";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  IconButton,
  Select,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import TableComponent from "@/components/Dashboard/table";
import PortfolioCards from "@/components/Dashboard/portfolioCards";
import { usePathname, useRouter } from "next/navigation";
import ProfileDropdown from "@/components/Dashboard/Profile";
import NotificationDropdown from "@/components/Dashboard/Notifications";

export const TopDashboardBoxes = () => {
  const { theme, toggleTheme } = useContext(ToggleThemeContext);
  const dark = theme.mode === "dark";
  const [arrowButtonDirection, setArrowButtonDirection] = useState("down");
  const router = useRouter();
  const isInVerifyPageInDashboard = usePathname() === "/dashboard/verify";

  function goToVerifyPage() {
    router.push("/dashboard/verify");
  }

  const targetTime = new Date();
  targetTime.setHours(23, 59, 59, 0);

  const formatTime = (time) => String(time).padStart(2, "0");

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  function calculateTimeRemaining(targetTime) {
    const now = new Date();
    const diff = targetTime - now;

    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <section className={`flex flex-col gap-4`}>
      {!isInVerifyPageInDashboard && (
        <div
          className={`flex box-border border-2 flex-col gap-4 lg:gap-0 lg:flex-row rounded-lg py-[18px] px-5 lg:items-center justify-between w-full   ${
            dark
              ? "bg-dashboard_cards_bg  border-outline_orange"
              : "bg-sidebar_light border-transparent "
          }`}
        >
          <span
            className={`  ${
              dark ? "" : "text-light_mainTxt"
            } text-[.9rem] lg:text-[1rem] font-[700]`}
          >
            Kindly proceed with your account verification for proper trading.
          </span>
          <Button
            onClick={goToVerifyPage}
            customClassName={`text-white bg-btn_orange`}
            text="Verify Account"
            variant="custom-yellow"
          />
        </div>
      )}{" "}
      <div
        className={`flex flex-col lg:flex-row rounded-lg py-[18px] border-2 border-outline_orange px-5 items-center justify-between w-full  ${
          dark ? "bg-dashboard_cards_bg " : "bg-white"
        }`}
      >
        <div className="flex   gap-4 items-center ">
          <span
            className={`text-outline_orange  text-[.9rem] lg:text-[1rem] font-[700]`}
          >
            Market Closing Hours:{" "}
          </span>

          <div className="flex items-center gap-5">
            <span className=" p-3 p rounded-lg bg-outline_orange">
              {formatTime(timeRemaining.hours)}
            </span>{" "}
            :
            <span className=" p-3 rounded-lg bg-outline_orange">
              {formatTime(timeRemaining.minutes)}
            </span>
          </div>
        </div>
        <div className={`flex gap-2 items-center`}>
          <NotificationDropdown />

          <IconButton
            onClick={toggleTheme}
            icon={theme.img}
            variant={"ghost"}
            sx={{
              _hover: {
                background: "transparent",
              },
            }}
            aria-label="Theme icon change  "
          ></IconButton>
          <div className={`relative w-[40px] h-[40px]`}>
            <Image
              src="/Dashboard/avatarDashboard.png"
              alt="avatar"
              layout="fill"
            />
          </div>
          <div>
            <span className={`text-default_steps`}>Gabriel Cooper</span>

            <ProfileDropdown />
          </div>
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ToggleThemeContext);
  const dark = theme.mode === "dark";
  const router = useRouter();
  function goToStocksPage() {
    router.push("/dashboard/stocks");
  }

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
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
    { Header: "24H change", accessor: "24h" },
  ];

  const data = [
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
      "24h": "+23%",
    },
    {
      name: {
        title: "Access Bank",
        image: "/onboard/accessbank.png",
      },
      price: "₦28000",
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

  const topSector = [
    { title: "Entertainment", text: "There are stocks are often distributed" },
    { title: "Sports", text: "There are stocks are often distributed" },
    {
      title: "Estate Management",
      text: "There are stocks are often distributed",
    },
    { title: "Transport", text: "There are stocks are often distributed" },
  ];

  function viewSectors(title) {
    router.push(`/dashboard/sectors?type=${title.toLowerCase()}`);
  }

  return (
    <div className=" py-8">
      {/* Portfolio Cards Section */}
      <PortfolioCards />

      <section className={`flex flex-col lg:flex-row gap-[22px] mt-[24px]`}>
        <div className={`flex flex-col gap-6 lg:w-[52%]`}>
          {/*  Top Gainers Table*/}
          <div
            className={`border-2 flex flex-col gap-5 ${
              dark ? "bg-dashboard_cards_bg" : "bg-white"
            } px-2 py-4 lg:p-6 rounded-lg border-outline_orange`}
          >
            <div
              className={`flex px-2  text-[.9rem] lg:text-[1rem] lg:px-0 w-full justify-between`}
            >
              <span className={`text-outline_orange`}>Top Gainers</span>
              <button
                onClick={goToStocksPage}
                className={`text-dashboard_green_80`}
              >
                View All Stocks
              </button>
            </div>

            <div className={`flex  px-2 lg:px-0 gap-4`}>
              <div className={`w-4/5`}>
                <InputGroup size="md">
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input type="tel" placeholder="Search for anything" />
                </InputGroup>
              </div>
              <div className={`w-1/5`}>
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
          <div
            className={`border-2 flex flex-col gap-5 ${
              dark ? "bg-aside_onboard" : "bg-white"
            } p-6 rounded-lg border-outline_orange`}
          >
            <div
              className={`flex w-full  text-[.9rem] lg:text-[1rem] justify-between`}
            >
              <span className={`text-outline_orange`}>Market News</span>
              <button className={`text-dashboard_green_80`}>Show More</button>
            </div>
            {/* News List */}
            <div className={`flex flex-col gap-5`}>
              {marketNews.map((item) => {
                return (
                  <div
                    className={`flex flex-col lg:flex-row ${
                      dark
                        ? "bg-dashboard_cards_bg"
                        : "bg-dashboard_cards_light"
                    }  rounded-lg gap-4 p-3`}
                  >
                    <div className={`relative lg:w-1/2 h-[100px]`}>
                      <Image
                        src="/blogImg.png"
                        alt="news image"
                        layout="fill"
                      />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                      <small className={`text-btn_orange text-[.8rem]`}>
                        {" "}
                        {item.type}{" "}
                      </small>
                      <span> {item.title} </span>
                      <span className={`text-[.8rem]`}> {item.shortText} </span>
                      <span className={`text-[.8rem]`}> {item.date} </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-6 lg:w-[48%]`}>
          <div
            className={`border-2 flex flex-col gap-5 ${
              dark ? "bg-aside_onboard" : "bg-white"
            } p-6 rounded-lg border-outline_orange`}
          >
            <div className={`flex w-full justify-between`}>
              <span
                className={`text-outline_orange  text-[.9rem] lg:text-[1rem]`}
              >
                Announcement
              </span>
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

            <div className={`flex flex-col gap-5`}>
              <div
                className={`flex ${
                  dark ? "bg-dashboard_cards_bg" : "bg-white"
                } items-center justify-between h-fit rounded-lg gap-4 p-3`}
              >
                <div className={`flex  flex-col gap-1`}>
                  <span> Stock of the week</span>
                  <div className={`flex gap-1`}>
                    <span className={`w-[20px] h-[20px] relative`}>
                      <Image
                        src="/onboard/accessbank.png"
                        alt="accessbank"
                        layout="fill"
                      />
                    </span>
                    <div className={`flex flex-col gap-[2px]`}>
                      <span>GTB</span>
                      <small>Guaranty Trust Bank</small>
                    </div>
                  </div>
                </div>

                <div>
                  <span className={`rounded-lg border p-2 border-[#B3BBBB]`}>
                    {" "}
                    60320{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border-2 flex flex-col gap-5 ${
              dark ? "bg-aside_onboard" : "bg-white"
            } p-6 rounded-lg border-outline_orange`}
          >
            <span
              className={`text-btn_orange text-[.9rem] lg:text-[1rem] font-[700]`}
            >
              Top Sector
            </span>

            <ul className={`flex flex-col gap-4`}>
              {topSector.map((item) => {
                return (
                  <li
                    key={item}
                    onClick={() => viewSectors(item.title)}
                    className={`  cursor-pointer flex py-5 px-4 ${
                      dark
                        ? "bg-dashboard_cards_bg"
                        : "bg-dashboard_cards_light"
                    } rounded-lg flex-col gap-2`}
                  >
                    <span className={`font-[700]`}> {item.title}</span>
                    <span> {item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
