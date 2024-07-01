"use client";
import { useTable } from "react-table";
import Link from "next/link";
import Button from "../button";
import { TbHeartPlus } from "react-icons/tb";
import { useTheme } from "styled-components";
import { useRouter } from "next/navigation";
const StocksTableComponent = ({
  columns,
  data,
  buttonAction,
  buttonClicked,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  const dark = useTheme().mode === "dark";
  const router = useRouter();
  function handleButtonAction(row) {
    if (buttonAction === "compare") {
      console.log(row);
    }

    if (buttonAction === "buy") {
      console.log(row.values);
      router.push(`/dashboard/stocks/${row.id}`);
    }
    buttonClicked(row.values);
  }
  return (
    <table
      className={`border-separate text-[.7rem] ${
        dark ? "" : "text-light_gray_50"
      }  border-spacing-x-2  lg:text-[1rem] lg:border-spacing-x-4 border-spacing-y-4 w-full`}
      {...getTableProps()}
    >
      <thead className="text-[.8rem]">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="text-left font-normal "
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
            <th className="text-left font-normal whitespace-nowrap ">
              Add to favorites
            </th>
            <th className="text-left font-normal ">Action</th>
          </tr>
        ))}
      </thead>
      <tbody className="" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className=" " {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className={`${
                      cell.column.id === "24h"
                        ? " mx-auto px-8 text-[.8rem] justify-center"
                        : ""
                    }`}
                    {...cell.getCellProps({
                      style: { width: cell.column.width },
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}

              <td className="  h-full justify-center">
                <button>
                  <TbHeartPlus
                    size={"30px"}
                    color={dark ? "#FD891C" : "#3B4B4B"}
                  />
                </button>
              </td>

              <td className="">
                <Button
                  onClick={() => handleButtonAction(row)}
                  variant="custom-yellow"
                  customClassName="w-full"
                >
                  {buttonAction === "compare" ? "Compare" : "Buy"}{" "}
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StocksTableComponent;
