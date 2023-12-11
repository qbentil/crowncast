import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { BiEdit, BiLastPage } from 'react-icons/bi';
import { BsArrowLeft, BsArrowRight, BsEye, BsTrashFill } from 'react-icons/bs';
import { FaSearch, FaSort } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import { MdOutlineNavigateNext } from 'react-icons/md';
import { ParseToOptions, convertToKey } from '../../../utils/data';
import { TbColumnObj } from '../../../interfaces/table';
import SubHeader from './subpage-header';

interface TableProps<T> {
  data: T[];
  columns: TbColumnObj[];
  onEditClick: (item: T) => void;
  onDeleteClick: (item: T) => void;
  onViewClick: (item: T) => void;
  itemsPerPage?: number;
  tableContainerClasses?: String;
  tableClasses?: String;
  showFooter?: boolean;
  showFilter?: boolean;
  showSearch?: boolean;
  showPagination?: boolean;

}

function Table<T>({
  data,
  columns,
  onEditClick,
  onDeleteClick,
  onViewClick,
  itemsPerPage = 10,
  tableContainerClasses,
  tableClasses,
  showFooter = true,
  showFilter = true,
  showSearch = true,
  showPagination = true,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string>('');
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [visibleData, setVisibleData] = useState<T[]>(data.slice(startIndex, endIndex));
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(data.length / itemsPerPage));

  // re render when data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setVisibleData(data.slice(start, end));
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const start = (newPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setVisibleData(data.slice(start, end));
  };

  const sortIcon = (column: string) => {
    return sortColumn.toLowerCase() === column.toString().toLowerCase() && sortOrder === 'asc' ?
      (<AiOutlineSortAscending className={`
                                          ${sortColumn.toLowerCase() === column.toString().toLowerCase() ? 'visible' : 'invisible'}
                                        group-hover:block text-blue-500 hover:text-blue-700 cursor-pointer text-lg mx-1`} />) :
      (<AiOutlineSortDescending className={`
                                        ${sortColumn.toLowerCase() === column.toString().toLowerCase() ? 'visible' : 'invisible'}
                                      group-hover:block text-blue-500 hover:text-blue-700 cursor-pointer text-lg mx-1`} />)
  }


  const sortData = (column: string, order: 'asc' | 'desc') => {
    visibleData.sort((a: any, b: any) => {
      if (a[convertToKey(column)] < b[convertToKey(column)]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[convertToKey(column)] > b[convertToKey(column)]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setVisibleData([...visibleData]);
  };

  const RenderHeader = ({ columns }: { columns: TbColumnObj[] }) => {
    return (
      <tr className="bg-gray-100">
        {columns.map((column, index) => (
          <th
            key={index}
            className="py-2 px-4 border-b border-gray-300"
            onClick={() => {
              if (column.options?.sort) {
                if (sortColumn.toLowerCase() === column.title.toString().toLowerCase()) {
                  if (sortOrder === 'asc') {
                    setSortOrder('desc');
                    sortData(column.title.toString(), 'desc');
                  } else {
                    setSortOrder('asc');
                    sortData(column.title.toString(), 'asc');
                  }
                } else {
                  setSortColumn(column.title.toString());
                  setSortOrder('asc');
                  sortData(column.title.toString(), 'asc');
                }
              }
            }
            }
          >
            <span className='cursor-pointer group flex items-center'>
              {column.title}
              {
                column.options?.sort && (
                  <>
                    {
                      sortIcon(column.title.toString())
                    }
                  </>
                )
              }
            </span>
          </th>
        ))}
        <th className="py-2 px-4 border-b border-gray-300">Actions</th>
      </tr>
    )
  }

  const Pagination = () => {
    return (
      <>
        <div className="mt-4 flex gap-x-3 justify-end items-center">
          <p className="text-sm text-gray-500">
            Showing {startIndex + 1} to {endIndex > data.length ? data.length : endIndex} of {data.length} entries
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className={`inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium bg-transparent focus:outline-none border border-primary-700 rounded-l-lg focus:z-10 focus:ring-2 focus:bg-primary-700 focus:text-white ${currentPage === 1 ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'text-primary-700 hover:bg-primary-700 hover:text-white'} `}
            >
              <BiLastPage className="transform rotate-180" />
            </button>
            <div className="flex items-center justify-center">
              {/*  next and prev buttons */}
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium  bg-transparent focus:outline-none border border-primary-700 border-l-0 border-r-0  focus:z-10 focus:ring-2 focus:bg-primary-700 focus:text-white ${currentPage === 1 ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'text-primary-700 hover:bg-primary-700 hover:text-white'
                }`}>
                <MdOutlineNavigateNext className="transform rotate-180" />
              </button>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium  bg-transparent focus:outline-none border border-primary-700  border-r-0  focus:z-10 focus:ring-2 focus:bg-primary-700 focus:text-white ${currentPage === totalPages ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'text-primary-700 hover:bg-primary-700 hover:text-white'
                }`}>
                <MdOutlineNavigateNext />
              </button>
            </div>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium  bg-transparent focus:outline-none border border-primary-700 rounded-r-lg  focus:z-10 focus:ring-2 focus:bg-primary-700 focus:text-white ${currentPage === totalPages ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'text-primary-700 hover:bg-primary-700 hover:text-white'
                }`}
            >
              <BiLastPage />
            </button>
          </div>
        </div>
      </>
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      setVisibleData(data.slice(startIndex, endIndex));
      return;
    }
    const filteredData = data.filter((item: any) => {
      let found = false;
      columns.forEach((column) => {
        if (column.options?.customBodyRender) {
          if (column.options.customBodyRender(item).toString().toLowerCase().includes(searchValue.toLowerCase())) {
            found = true;
          }
        } else {
          if ((item as Record<string, any>)[convertToKey(column.title)].toString().toLowerCase().includes(searchValue.toLowerCase())) {
            found = true;
          }
        }
      });
      return found;
    });
    setVisibleData(filteredData);
  }

  return (
    <div className={`p-3 ${tableContainerClasses} margin-auto`}>
      {/* filter: This show include a search bar at the right */}
      {
        showFilter && <SubHeader filters={ParseToOptions(columns)} title="Admins" onSearch={handleSearch} />
      }
      {/* table */}
      <table className={`${tableClasses} border-collapse border border-gray-300`}>
        <thead>
          <RenderHeader columns={columns} />
        </thead>
        <tbody>
          {visibleData.length > 0 && visibleData.map((item, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              {columns.map((column, index) => (
                <td
                  onClick={() => { console.log(column.options) }}
                  key={index}
                  className="py-2 px-4 border-b border-gray-300 truncate"
                >

                  {column.options?.customBodyRender ? column.options.customBodyRender(item) : (item as Record<string, any>)[convertToKey(column.title)]}
                </td>
              ))}
              <td className="py-2 px-1 border-b border-gray-300">
                <div className="flex justify-center">
                  <BiEdit
                    onClick={() => onEditClick(item)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg mx-1"
                  />
                  <BsTrashFill
                    onClick={() => onDeleteClick(item)}
                    className="text-red-500 hover:text-red-700 cursor-pointer text-lg mx-1"
                  />
                  <BsEye
                    onClick={() => onViewClick(item)}
                    className="text-green-500 hover:text-green-700 cursor-pointer text-lg mx-1"
                  />
                </div>
              </td>
            </tr>
          ))}
          {
            visibleData.length === 0 && (
              <tr className='hover:bg-gray-100'>
                <td className="py-2 px-4 border-b border-gray-300" colSpan={columns.length + 1}>
                  <p className='text-center text-gray-500'>No data found</p>
                </td>
              </tr>
            )
          }
        </tbody>
        {
          showFooter && (
            <tfoot>
              <RenderHeader columns={columns} />
            </tfoot>
          )
        }
      </table>
      {
        showPagination && (
          <Pagination />
        )
      }
    </div>
  );
}

export default Table;
