"use client";

import React, { useMemo } from "react";
import Icon from "@/components/ui/Icon";
import { useTable, useRowSelect, useSortBy, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";

const CustomerTable = ({ dataTable, dataColumns }) => {
  const columns = useMemo(() => dataColumns, []);
  const data = useMemo(() => dataTable, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <div className="mb-6 items-center justify-between md:flex">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>
      <div className="-mx-6 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table
              className="min-w-full table-fixed divide-y divide-slate-100 dark:divide-slate-700"
              {...getTableProps}
            >
              <thead className="bg-slate-200 dark:bg-slate-700">
                {headerGroups.map((headerGroup: any, i: number) => (
                  <tr key={i}>
                    {headerGroup.headers.map((column: any) => {
                      const { key, ...restColumn } = column.getHeaderProps(
                        column.getSortByToggleProps(),
                      );
                      return (
                        <th key={key} {...restColumn} className="table-th cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <span>{column.render("Header")}</span>
                            <span>
                              {column.isSorted &&
                                (column.isSortedDesc ? (
                                  <Icon icon="heroicons:chevron-down-solid" />
                                ) : (
                                  <Icon icon="heroicons:chevron-up-solid" />
                                ))}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody
                className="divide-y divide-slate-100 bg-white dark:divide-slate-700 dark:bg-slate-800"
                {...getTableBodyProps}
              >
                {page.length > 0 ? (
                  page.map((row) => {
                    prepareRow(row);
                    const { key, ...restRowProps } = row.getRowProps();
                    return (
                      <tr key={key} {...restRowProps}>
                        {row.cells.map((cell: any) => {
                          const { key, ...restCellProps } = cell.getCellProps();
                          return (
                            <td key={key} {...restCellProps} className="table-td">
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={headerGroups[0].headers.length + 1}
                      className="table-td text-center"
                    >
                      No Data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {data.length > 10 && (
        <div className="mt-6 items-center justify-between space-y-5 md:flex md:space-y-0">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <select
              className="form-control w-max py-2"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Page{" "}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <ul className="flex flex-wrap items-center space-x-3 rtl:space-x-reverse">
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canPreviousPage ? "cursor-not-allowed opacity-50" : ""}`}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <Icon icon="heroicons:chevron-double-left-solid" />
              </button>
            </li>
            <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canPreviousPage ? "cursor-not-allowed opacity-50" : ""}`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Prev
              </button>
            </li>
            {pageOptions.map((page: any, pageIdx: any) => (
              <li key={pageIdx}>
                <button
                  aria-current="page"
                  className={` ${
                    pageIdx === pageIndex
                      ? "bg-slate-900 font-medium text-white dark:bg-slate-600 dark:text-slate-200"
                      : "bg-slate-100 font-normal text-slate-900 dark:bg-slate-700 dark:text-slate-400"
                  } flex h-6 w-6 items-center justify-center rounded text-sm leading-[16px] transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canNextPage ? "cursor-not-allowed opacity-50" : ""}`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </li>
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className={` ${!canNextPage ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <Icon icon="heroicons:chevron-double-right-solid" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
