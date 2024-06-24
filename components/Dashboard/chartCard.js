"use client";
import { useTheme } from "styled-components";
import LineChart from "../Charts/lineChartsStocks";
import { ChevronUpIcon } from "@chakra-ui/icons";

const ChartCard = ({ data, item }) => {
  const theme = useTheme();
  const dark = theme.mode === "dark";
  return (
    <div
      className={` ${
        dark ? "bg-stock_cardsbg" : "bg-white"
      } border-2 gap-3 pl-[12px] pr-2 flex flex-col py-[14px] border-outline_orange rounded-[12.5px]`}
      key={item}
    >
      <div className={`flex items-center gap-[2px]`}>
        <img src={item.img} alt="item logo" />
        <span className={`text-[.8rem]`}>{item.title}</span>
      </div>
      <div className={`flex justify-between`}>
        <span className={`text-[1.3rem] font-[700]`}>{item.price}</span>
        {/* Chart Section */}
        <div className={`flex items-end h-[40px] justify-end w-3/5 lg:w-1/2`}>
          <LineChart data={data} />
        </div>
      </div>
      <span className={`text-change_green`}>
        <ChevronUpIcon color={"#52FF00"} /> {item.percentChange}
      </span>
    </div>
  );
};

export default ChartCard;
