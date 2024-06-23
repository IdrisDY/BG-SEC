import React from "react";
import { useTable } from "react-table";
import Button from "../button";
import Link from "next/link";

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
      <thead>
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
                      cell.column.id === "24h" ? "text-change_green" : ""
                    }`}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
              <td className="">
                <button
                  onClick={() =>
                    console.log("Action clicked for row ID:", row.id)
                  }
                  className=" px-[10px]  text-white text-center w-full min-w-[67px] py-[7px] rounded-lg bg-btn_orange"
                >
                  <Link href={`/dashboard/stocks/${row.id}`}>Buy</Link>
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
