import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useTheme } from "styled-components";
import { LuSlidersHorizontal } from "react-icons/lu";
const FilterMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dark = useTheme().mode === "dark";
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        onClick={handleToggle}
        className={`"flex items-center justify-between w-full px-4 py-[10px] text-sm font-medium text-left  ${
          dark ? " bg-filter_dark_bg " : "bg-transparent"
        } border-2 border-outline_orange    rounded-lg `}
      >
        <div className="flex gap-2 items-center">
          <LuSlidersHorizontal
            style={{ minWidth: "15px" }}
            className={`${dark ? "white" : "black"}`}
          />
          <span className="text-gray-500">{selectedOption || "Filter"}</span>
        </div>
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 w-full mt-1 ${
            dark ? "bg-font_black text-outline_orange " : "bg-white"
          }   rounded-md shadow-lg`}
        >
          <ul className="py-1 text-sm ">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer select-none px-4 py-2 ${
                  dark ? "hover:bg-[#FFFFFF1A]" : "hover:bg-gray-100"
                } `}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
