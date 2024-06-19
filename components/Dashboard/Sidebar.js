"use client";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "styled-components";
const DashboardSidebar = () => {
  const listItems = ["Dashboard", "Stocks", "Wallet"];
  const theme = useTheme();
  const darkMode = theme.mode === "dark";
  const [listItemHovered, setItemListHovered] = useState({
    value: false,
    item: "",
  });
  const transitionDuration = "500ms";
  function handleSvgColorChange(item) {
    setTimeout(() => {
      setItemListHovered({ value: true, item: item });
    }, transitionDuration);
  }
  function handleLeaveHoverOnListItem() {
    setItemListHovered({
      value: false,
      item: "",
    });
  }
  return (
    <aside
      className={`mt-[47px] ${
        darkMode  ? "bg-aside_onboard" : "lg:bg-sidebar_light"
      } max-w-[500px] lg:absolute top:0 lg:left-0 flex mx-auto lg:max-w-full w-full lg:min-h-screen h-full lg:w-1/5 lg:mt-0`}
    >
      <div className={`h-full w-full hidden lg:flex flex-col  `}>
        <header className={`px-6`}>
          <div className={`relative w-[100%] h-[60px]`}>
            <Image
              src={`/onboard/bgl-onboard-darklogo.png`}
              layout="fill"
              alt="bgl logo"
            />
          </div>
        </header>

        <div className={`px-4 lg:h-full flex flex-col justify-between pt-6`}>
          <ul className={`flex gap-1 flex-col`}>
            {" "}
            {listItems.map((item) => {
              return (
                <li
                  onMouseLeave={handleLeaveHoverOnListItem}
                  onMouseOver={() => handleSvgColorChange(item)}
                  className={`flex px-3 py-2 gap-3 text-default_steps hover:text-white rounded-[6px] cursor-pointer transition-all duration-[${transitionDuration}] hover:bg-btn_orange`}
                  key={item}
                >
                  {" "}
                  {item === "Dashboard" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2H2V10H10V2Z"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 2H14V10H22V2Z"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 14H2V22H10V14Z"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 14H14V22H22V14Z"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  {item === "Stocks" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5 14.5H3.03875C3.51106 14.5 3.74721 14.5 3.95256 14.4013C4.15791 14.3026 4.30544 14.1182 4.60049 13.7494L6 12L7.5 14.5L9 11L11.5 16L15 9L17 12.5L18.5 11L19.9453 13.168C20.1973 13.546 20.3233 13.735 20.5074 13.8494C20.544 13.8721 20.582 13.8925 20.6212 13.9103C20.8185 14 21.0457 14 21.5 14"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 2.5V5.5M15 21.5V13.5"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
                        stroke="#83796B"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  {/* {item === "Portfolio" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 15V19"
                        stroke="#83796B"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 9V19"
                        stroke="#83796B"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 22H2"
                        stroke="#83796B"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 13V19"
                        stroke="#83796B"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.60009 8.79993C5.23521 8.31419 4.6543 8 4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12C5.10457 12 6 11.1046 6 10C6 9.54973 5.8512 9.13421 5.60009 8.79993ZM5.60009 8.79993L10.3999 5.20007M10.3999 5.20007C10.7648 5.68581 11.3457 6 12 6C12.783 6 13.4609 5.55006 13.7892 4.89462M10.3999 5.20007C10.1488 4.86579 10 4.45027 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.32158 13.9241 4.62543 13.7892 4.89462M13.7892 4.89462L18.2108 7.10538M18.2108 7.10538C18.0759 7.37457 18 7.67842 18 8C18 9.10457 18.8954 10 20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C19.217 6 18.5391 6.44994 18.2108 7.10538Z"
                        stroke="#83796B"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )} */}
                  {item === "Wallet" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                      />
                      <path
                        d="M10 7H16C18.8284 7 20.2426 7 21.1213 7.87868C22 8.75736 22 10.1716 22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7"
                        stroke={
                          listItemHovered.value && listItemHovered.item === item
                            ? "white"
                            : "#83796B"
                        }
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  )}
                  {item}
                </li>
              );
            })}
          </ul>

          <footer>
            <ul>
              {["Support", "Settings"].map((item) => {
                return (
                  <li
                    className={`flex px-3 py-2 gap-3 text-default_steps hover:text-white rounded-[6px] cursor-pointer transition-all duration-[${transitionDuration}] hover:bg-btn_orange`}
                    key={item}
                    onMouseOut={handleLeaveHoverOnListItem}
                    onMouseOver={() => handleSvgColorChange(item)}
                  >
                    {item === "Support" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 10.0385C10.5 9.18879 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.18879 13.5 10.0385C13.5 10.3447 13.4127 10.6301 13.2623 10.8698C12.8141 11.5844 12 12.2657 12 13.1154V13.5"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 15.5H12.009"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                    {item === "Settings" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 2V4M6 2V4"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.95133 21.9428 6.80467 21.9976 10.5 21.9999"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 8H21"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 20.7143V22M17.5 20.7143C16.3432 20.7143 15.3241 20.1461 14.7263 19.2833M17.5 20.7143C18.6568 20.7143 19.6759 20.1461 20.2737 19.2833M14.7263 19.2833L13.5004 20.0714M14.7263 19.2833C14.3728 18.773 14.1667 18.1597 14.1667 17.5C14.1667 16.8403 14.3727 16.2271 14.7262 15.7169M20.2737 19.2833L21.4996 20.0714M20.2737 19.2833C20.6272 18.773 20.8333 18.1597 20.8333 17.5C20.8333 16.8403 20.6273 16.2271 20.2738 15.7169M17.5 14.2857C18.6569 14.2857 19.6761 14.854 20.2738 15.7169M17.5 14.2857C16.3431 14.2857 15.3239 14.854 14.7262 15.7169M17.5 14.2857V13M20.2738 15.7169L21.5 14.9286M14.7262 15.7169L13.5 14.9286"
                          stroke={
                            listItemHovered.value &&
                            listItemHovered.item === item
                              ? "white"
                              : "#83796B"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    )}
                    {item}
                  </li>
                );
              })}
            </ul>
          </footer>
        </div>
      </div>

      <div className="flex lg:hidden min-w-full items-center px-[20px] pt-5 justify-between">
        <div className={`relative w-[50%] h-[60px]`}>
          <Image
            src={`/onboard/bgl-onboard-darklogo.png`}
            layout="fill"
            alt="bgl logo"
          />
        </div>
        <button className="">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.12695 5.69019H19.0578"
              stroke={darkMode ? "white" : "#002616"}
              stroke-width="1.77009"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.12695 11.0005H19.0578"
              stroke={darkMode ? "white" : "#002616"}
              stroke-width="1.77009"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.12695 16.3108H19.0578"
              stroke={darkMode ? "white" : "#002616"}
              stroke-width="1.77009"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
