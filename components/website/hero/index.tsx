import React from 'react'
import Button from '../../Button'
import { LuPlayCircle } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { Transition } from '../../../utils/animate'

const Hero = () => {
    return (
        <div className='w-full overflow-x-hidden min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center md:mt-6'>
            <div className='w-[85vw] h-full flex flex-col items-center justify-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-center text-primary'>
                    Welcome to Crowncast
                </h1>
                <p className='text-base text-center md:mt-4'>
                    The ultimate mobile voting solution for your contests and pageantry events.
                </p>
                {/* actions */}
                <div className='w-full flex items-center justify-center gap-x-4 mt-8'>
                    <Button className='mt-8' title='Watch Demo' variant='secondary'
                        icon={<LuPlayCircle />}
                    />
                    <Button className='mt-8' title='Get Started' />
                </div>
            </div>

            {/* View */}
            <div className='w-full md:w-[75%] flex flex-col mt-4 items-center justify-center'>
                <motion.img
                    // button to top
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={Transition}
                    src='/assets/desktop.svg'
                    alt='hero'
                    className='w-full h-full'
                />
            </div>

            {/* trusted companies */}
            <div className='w-full flex flex-col items-center gap-y-2 md:gap-y-0 justify-center my-1'>
                <h1 className='text-sm text-center text-gray-600'>
                    Trusted by
                </h1>
                <div className='w-[85vw] md:h-[10vh] flex items-center justify-center gap-x-4'>
                    {/* make logos move indefinitely */}
                    <div className='flex items-center justify-center'>
                        <img src='/assets/brands/company.svg' alt='brand' className='w-full md:w-4/5 h-full' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='/assets/brands/company1.svg' alt='brand' className='w-full md:w-4/5 h-full' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='/assets/brands/company2.svg' alt='brand' className='w-full md:w-4/5 h-full' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='/assets/brands/company3.svg' alt='brand' className='w-full md:w-4/5 h-full' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='/assets/brands/company4.svg' alt='brand' className='w-full md:w-4/5 h-full' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero