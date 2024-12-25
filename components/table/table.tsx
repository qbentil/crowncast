"use client";

import React, { useEffect, useMemo, useState } from "react";

import Button from "../core/button";
import { TableIcon } from "./icons";
import { cn } from "@/lib/utils";

export interface TbColumnObj {
  title: string;
  dataIndex?: string;
  options: {
    filter: boolean;
    sort: boolean;
    customBodyRender?: (value: any) => JSX.Element;
  };
  selector: (row: any, i?:number) => any;
}

interface TableAction<T> {
  element: JSX.Element; // The JSX element to render
  onClick: (item: T) => void; // The function to call when the action is clicked
}

interface TableProps<T> {
  data: T[];
  columns: TbColumnObj[];
  onRowClick: (item: T) => void;
  metadata: {
    page: number;
    totalCount: number;
    isFetching: boolean;
    pageSize: number;
  };
  tableContainerClasses?: string;
  tableClasses?: string;
  showFooter?: boolean;
  filterRender?: JSX.Element;
  searchRender?: React.ReactNode;
  actions?: TableAction<T>[];
  showSearch?: boolean;
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
}

function Table<T>({
  data,
  columns,
  onRowClick,
  metadata,
  tableContainerClasses,
  tableClasses,
  showFooter = true,
  filterRender,
  searchRender,
  actions,
  showSearch = false,
  onNext,
  onPrev,
  onFirst,
  onLast
}: TableProps<T>) {
  const { page, totalCount, isFetching } = metadata;

  // console.log(metadata)
  const totalPages = Math.ceil(totalCount / metadata.pageSize);
  const [visibleData, setVisibleData] = useState<T[]>(data)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("");


  const sortData = (column: TbColumnObj, order: "asc" | "desc") => {
    const sortedData = [...data].sort((a: any, b: any) => {
      const aValue = column.selector(a);
      const bValue = column.selector(b);

      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleData(sortedData);
  };

  const sortIcon = (column: string) => {
    return sortColumn.toLowerCase() === column.toLowerCase() && sortOrder === "asc" ? (
      <TableIcon
        icon="sort"
        className="text-active hover:text-primary cursor-pointer text-lg mx-1"
      />
    ) : (
      <TableIcon
        icon="sort"
        className="text-active hover:text-primary cursor-pointer text-lg mx-1"
      />
    );
  };

  const Pagination = () => (
    <div className="flex bg-white justify-between items-center py-4 px-2 mt-8">
      <p className="text-sm text-gray-500">
        Showing page <b className="text-primary">{page}</b> of {totalPages} pages. 
        Total Records: <b className="text-primary">{totalCount}</b>
      </p>
      <div className="flex justify-center gap-x-2 items-center">
        <Button
          variant="outline"
          onClick={onFirst}
          disabled={page === 1}
          className={cn(page === 1 && "bg-gray-300 cursor-not-allowed w-max")}
        >
          <TableIcon icon="first" />
        </Button>
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={page === 1}
          className={cn(page === 1 && "bg-gray-300 cursor-not-allowed w-max")}
        >
          <TableIcon icon="prev" />
        </Button>
        <Button
          variant="outline"
          onClick={onNext}
          disabled={page === totalPages}
          className={cn(page === totalPages && "bg-gray-300 cursor-not-allowed w-max")}
        >
          <TableIcon icon="next" />
        </Button>
        <Button
          variant="outline"
          onClick={onLast}
          disabled={page === totalPages}
          className={cn(page === totalPages && "bg-gray-300 cursor-not-allowed w-max")}
        >
          <TableIcon icon="last" />
        </Button>
      </div>
    </div>
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = data.filter((item) =>
      columns.some((column) => column.options.filter && column.selector(item)?.toLowerCase().includes(searchValue))
    );
    setVisibleData(filteredData);
  };




  return (
    <div className={cn(tableContainerClasses, "bg-transparent w-full relative flex flex-col h-full")}>
      <div className="w-full rounded-md flex-grow flex flex-col">
        <div className="w-full bg-white flex justify-between items-center p-2">
          {searchRender ? (
            (searchRender && showSearch) ? <div className="flex items-center">
              {/* render with search */}
              {searchRender}
              <div className="w-2/5 py-2 flex items-center gap-x-2 border bg-white border-neutral-100 rounded-md px-2">
                <TableIcon icon="search" className="text-neutral-500" />
                <input
                  type="text"
                  placeholder={`Search By ${columns.map((col) => col.options.filter ? col.title : "").join(", ")}`}
                  className="outline-none w-full debug"
                  onChange={handleSearch}
                />
              </div>
            </div> : searchRender
          ) : (
            <div className="w-2/5 py-2 flex items-center gap-x-2 border border-neutral-100 rounded-md px-2  shadow bg-gray-light">
              <TableIcon icon="search" className="text-neutral-500" />
              <input
                type="text"
                placeholder={`Search By ${columns.map((col) => col.options.filter ? col.title : "").join(", ")}`}
                className="outline-none w-full bg-transparent"
                onChange={handleSearch}
              />
            </div>
          )}
          {filterRender}
        </div>
        <div className="overflow-y-auto flex-grow bg-white">

          <table className={`${tableClasses} border-collapse border border-neutral-100 w-full`}>
            <thead>
              <tr className="bg-neutral-100">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="py-2 px-4 border-gray-300"
                    onClick={() => {
                      if (column.options?.sort) {
                        if (sortColumn.toLowerCase() === column.title.toLowerCase()) {
                          if (sortOrder === "asc") {
                            setSortOrder("desc");
                            sortData(column, "desc");
                          } else {
                            setSortOrder("asc");
                            sortData(column, "asc");
                          }
                        } else {
                          setSortColumn(column.title);
                          setSortOrder("asc");
                          sortData(column, "asc");
                        }
                      }
                    }}
                  >
                    <span className="cursor-pointer font-medium group flex items-center">
                      {column.title}
                      {column.options?.sort && sortColumn === column.title && sortIcon(column.title)}
                    </span>
                  </th>
                ))}
                {actions && (
                  <th className="py-2 px-4 font-medium border-gray-300">Actions</th>
                )}
              </tr>
            </thead>
            <tbody className="w-full">
              {
                isFetching && <div className="w-full  flex justify-center items-center h-64">
                  <p className="">Fetching data...</p>
                </div>
              }
              {!isFetching && <>

                {
                  visibleData.length > 0 ? (
                    visibleData.map((item, index) => (
                      <tr key={index} className="hover:bg-neutral-50 cursor-pointer h-max font-normal border-b border-neutral-300">
                        {columns.map((column, colIndex) => (
                          <td
                            onClick={() => onRowClick?.(item)}
                            key={colIndex}
                            className="py-2 px-4"
                          >
                            {column.options.customBodyRender
                              ? column.options.customBodyRender(column.selector(item, index))
                              : column.selector(item, index)}
                          </td>
                        ))}
                        {actions &&
                          <td className="py-2 px-4 ">
                            <div className="flex space-x-2 items-center justify-center">
                              {actions.map((action, actionIndex) => (
                                <button
                                  key={actionIndex}
                                  onClick={() => action.onClick(item)}
                                  className="text-blue-500"
                                >
                                  {action.element}
                                </button>
                              ))}
                            </div>
                          </td>
                        }
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length + (actions ? 1 : 0)} className="text-center py-4">
                        No data found
                      </td>
                    </tr>
                  )
                }
              </>}
            </tbody>
          </table>
        </div>
        {showFooter && <Pagination />}
      </div>
    </div>
  );
}

export default Table;
