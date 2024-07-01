import React from "react";
import { useTable } from "react-table";
import Button from "../button";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  function handleButtonAction(id) {
    router.push(`/dashboard/stocks/${id}`);
  }

  return (
    <table
      className="border-separate text-[.7rem] border-spacing-x-2  lg:text-[.9rem] lg:border-spacing-x-4 border-spacing-y-4 w-full"
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
              <td className="">
                <Button
                  onClick={() => handleButtonAction(row.id)}
                  variant="custom-yellow"
                  className=" px-[10px]  text-white text-center w-full min-w-[67px] py-[7px] rounded-lg bg-btn_orange"
                >
                  Buy
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
