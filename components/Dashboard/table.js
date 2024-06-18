import React from "react";
import { useTable } from "react-table";
import Button from "../button";

const TableComponent = ({ columns, data }) => {
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
      className="border-separate  text-[.9rem] border-spacing-x-4 border-spacing-y-4 w-full"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="text-left" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
            <th className="text-left">Action</th>
          </tr>
        ))}
      </thead>
      <tbody className="" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className=" " {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log(cell);
                return (
                  <td
                    className={`${
                      cell.column.id === "24h" ? "text-change_green" : ""
                    } text-right `}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
              <td className="" >
                <button
                  onClick={() =>
                    console.log("Action clicked for row ID:", row.id)
                  }
                  className=" px-[10px] text-center w-full min-w-[67px] py-[7px] rounded-lg bg-btn_orange"
                >
                  Buy
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
