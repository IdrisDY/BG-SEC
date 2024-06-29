import React from "react";
import { useTable } from "react-table";
import Link from "next/link";
import Button from "../button";
import { TbHeartPlus } from "react-icons/tb";
const StocksTableComponent = ({ columns, data }) => {
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

  return (
    <table
      className="border-separate text-[.7rem] border-spacing-x-2  lg:text-[1rem] lg:border-spacing-x-4 border-spacing-y-4 w-full"
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
                  <TbHeartPlus size={"30px"} color="#FD891C" />
                </button>
              </td>

              <td className="">
                <button
                  onClick={() =>
                    console.log("Action clicked for row ID:", row.id)
                  }
                  className="w-[100px] rounded-lg text-center bg-btn_orange h-[40px]"
                >
                  <Link
                    className=" flex  justify-center items-center w-full h-[40px] "
                    href={`/dashboard/stocks/${row.id}`}
                  >
                    Buy
                  </Link>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StocksTableComponent;
