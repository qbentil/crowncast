import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from '../../../utils/animate'
import { HiOutlineDocumentText, HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { RiBarChartLine } from 'react-icons/ri'
import { LuShieldCheck } from 'react-icons/lu'


const data = [
    {
        title: 'Manage Contestants',
        description: 'The ability to add, edit, and delete contestants, as well as upload photos and other media.',
        icon: <HiOutlineUsers className='text-md text-primary-700' />
    },
    {
        title: 'Vote Management',
        description: 'The ability to view and manage the votes that have been cast, including the ability to view the number of votes for each contestant.',
        icon: <RiBarChartLine className='text-md text-primary-700' />
    },
    {
        title: 'Manage Orgnizers',
        description: 'The ability to view, add, edit and delete organizers.',
        icon: <HiOutlineUsers className='text-md text-primary-700' />
    },
    {
        title: 'Manage Events',
        description: 'The ability to add, edit, and delete events/contests, as well as upload event banner photos.',
        icon: <HiOutlineCalendarDays className='text-md text-primary-700' />
    },
    {
        title: 'Reports',
        description: 'The ability to view various statistics and reports, such as the total number of votes cast, and the number of votes for each contestant.',
        icon: <HiOutlineDocumentText className='text-md text-primary-700' />
    },
    {
        title: 'Security',
        description: 'A secure login system and role-based access controls to ensure that only authorized personnel can access the admin page.',
        icon: <LuShieldCheck className='text-md text-primary-700' />
    },

]

const Feature = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
    return (
        <div className='h-[20vh] flex flex-col items-center justify-center gap-y-2'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full bg-primary-50'>
                <div className='w-8 h-8 flex items-center justify-center rounded-full bg-primary-100'>
                    {icon}
                </div>
            </div>
            <h1 className='text-xl font-inter text-center font-500 text-gray-900'>
                {title}
            </h1>
            <p className='text-md font-inter text-center font-400 font-gray-500'>
                {description}
            </p>
        </div>
    )
}
const Features = () => {
    return (
        <div className='w-full bg-gray-50 overflow-x-hidden  md:min-h-[50vh] flex flex-col items-center justify-center'>
            <div className='w-[85vw] h-full flex flex-col items-center justify-center'>
                {/* heading */}
                <div className='w-full flex flex-col items-center justify-center gap-y-2 mb-4'>
                    <h1 className='text-sm text-center text-primary'>
                        Features
                    </h1>
                    <p className='text-xl md:text-3xl text-center md:mt-4'>
                        Take a look at out cool features
                    </p>
                    {/* actions */}
                    <h1 className='text-sm text-center text-gray-800'>
                        I will write something here
                    </h1>
                </div>

                {/* Mockups */}
                <div className='flex'>
                    <motion.img
                        // left to right
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={Transition}
                        src='/assets/iphone_mockup.svg' className='w-full -mr-16 z-10' alt='iphone_mockup' />
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={Transition}
                        src='/assets/desktop_mockup.svg'
                        className='w-full'
                        alt='desktop_mockup'
                    />
                </div>


                {/* features list */}
                <div className='w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 mt-8'>
                    {
                        data.map((item) => (
                            <Feature
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Features