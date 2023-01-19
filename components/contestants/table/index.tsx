import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import Button from '../../Button'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const ContestantsTable = () => {
    return (
        <div className='w-full py-3 my-4 bg-white shadow-sm'>
            {/* title */}
            <div className='flex items-center justify-start gap-x-2'>
                <h1 className='text-lg font-bold'>Contestants</h1>
                <span className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-sm'>100 users</span>
            </div>
            {/* table */}
            <div className='w-full mt-4'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='font-normal bg-gray-200 text-gray-500 text-sm'>
                            <td className='border border-gray-200 p-2'>Name</td>
                            <td className='border border-gray-200 p-2'>Status</td>
                            <td className='border border-gray-200 p-2'>Event</td>
                            <td className='border border-gray-200 p-2'>Category</td>
                            <td className='border border-gray-200 p-2'>Votes</td>
                            <td className='border border-gray-200 p-2'></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-sm text-gray-500'>
                            <td className='border border-gray-200 p-2'>John Doe</td>
                            <td className='border border-gray-200 p-2'>Active</td>
                            <td className='border border-gray-200 p-2'>Event 1</td>
                            <td className='border border-gray-200 p-2'>Category 1</td>
                            <td className='border border-gray-200 p-2'>100</td>
                            <td className='border border-gray-200 p-2'>
                                <div className='flex items-center justify-center gap-x-2'>
                                    <button className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-lg shadow-sm cursor-pointer'>
                                        <MdEdit />
                                    </button>
                                    <button className='bg-primary-50 text-primary-700 rounded px-4 py-1 text-lg shadow-sm cursor-pointer'>
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
                <Button
                    icon={<BsArrowLeft />}
                    title='Previous'
                    variant='secondary'
                />
                <div>

                </div>
                <Button
                    icon={<BsArrowRight />}
                    title='Next'
                    iconPosition='right'
                    variant='secondary'
                />
            </div>
        </div>
    )
}

export default ContestantsTable