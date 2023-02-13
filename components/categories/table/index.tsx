import { MdDelete, MdEdit, MdInfo } from 'react-icons/md'

import Pagination from '../../pagination'
import React from 'react'

const Table = () => {
    return (
        <div className='w-full py-3 my-4 bg-white shadow-sm'>
            {/* title */}
            <div className='flex items-center justify-start gap-x-2'>
                <h1 className='text-lg font-bold'>Events</h1>
                <span className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-sm'>100 events</span>
            </div>
            {/* table */}
            <div className='w-full mt-4'>
                <table className='w-full border-collapse hover'>
                    <thead>
                        <tr className='font-normal bg-gray-200 text-gray-500 text-sm '>
                            <td className='border border-gray-300 p-2'>Name</td>
                            <td className='border border-gray-300 p-2'>Description</td>
                            <td className='border border-gray-300 p-2'>Opening</td>
                            <td className='border border-gray-300 p-2'>Closing</td>
                            <td className='border border-gray-300 p-2'>Cost /vote</td>
                            <td className='border border-gray-300 p-2'>Organizer</td>
                            <td className='border border-gray-300 p-2 text-center'>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-sm text-gray-500'>
                            <td className='border border-gray-200 p-2'>Miss Universe</td>
                            <td className='border border-gray-200 p-2'>Top most Students Annual festival</td>
                            <td className='border border-gray-200 p-2'>October 2023</td>
                            <td className='border border-gray-200 p-2'>December 2023</td>
                            <td className='border border-gray-200 p-2'>GHC1.50</td>
                            <td className='border border-gray-200 p-2 text-blue-600 hover:underline cursor-pointer'>
                                Media Billo
                            </td>
                            <td className='border border-gray-200 p-2'>
                                <div className='flex items-center justify-center gap-x-1'>
                                    <button title='More info' className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-lg shadow-sm cursor-pointer'>
                                        <MdInfo />
                                    </button>
                                    <button title='Edit' className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-lg shadow-sm cursor-pointer'>
                                        <MdEdit />
                                    </button>
                                    <button title='Delete' className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-lg shadow-sm cursor-pointer'>
                                        <MdDelete />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* table controllers */}
            <div className='w-full flex items-center justify-between px-2 py-3'>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    onPageChange={(page) => console.log(page)}
                    showIcons={true}
                    nextLabel='Next'
                    prevLabel='Prev'

                />
            </div>
        </div>
    )
}

export default Table