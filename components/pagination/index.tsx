import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (state: string) => void;
    showIcons?: boolean;
    nextLabel?: string;
    prevLabel?: string;
    enteriesPerPage?: number;
}

const Pagination = ({ currentPage, totalPages, onPageChange, showIcons, nextLabel, prevLabel, enteriesPerPage }: Props) => {

    return (
        <div className="flex flex-col items-center justify-center gap-y-2 w-full">
            <p className='text-sm text-gray-500'>
                Showing {1} to {10} of {100} entries
            </p>
            <div className="flex justify-center items-center rounded-md shadow-sm" role="group">
                <button type="button" className="inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium text-primary-700 bg-transparent focus:outline-none border border-primary-700 rounded-l-lg hover:bg-primary-700 hover:text-white focus:z-10 focus:ring-2 focus:bg-primary-700 focus:text-white ">
                    {
                        showIcons && <BsArrowLeft />
                    }
                    {prevLabel || "Previous"}
                </button>
                <p  className="inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium text-primary-700 bg-transparent focus:outline-none border-t border-b border-primary-700  ">
                    {currentPage} / {totalPages}
                </p>
                <button type="button" className="inline-flex gap-x-3 items-center px-4 py-2 text-sm font-medium text-primary-700 bg-transparent focus:outline-none border border-primary-700 rounded-r-md hover:bg-primary-700 hover:text-white focus:z-10 focus:ring-2 focus:bg-primary-700 focus:text-white ">
                    {nextLabel || "Next"}
                    {
                        showIcons && <BsArrowRight />
                    }
                </button>
            </div>

        </div>
    )
}

export default Pagination