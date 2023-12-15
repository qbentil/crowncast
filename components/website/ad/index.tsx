import React from 'react'
import Button from '../../Button'

const Ad = () => {
    return (
        <div className="w-full bg-whte overflow-x-hidden flex flex-col items-center justify-center py-4">
            {/* title and header */}
            <div className='w-[85vw] flex flex-col items-start justify-center gap-y-2 mb-4'>
                <h1 className='text-sm text-center text-primary'>
                    Marketing
                </h1>
                <p className='text-xl md:text-3xl text-center md:mt-3'>
                    Make your events known
                </p>
                {/* actions */}
                <h1 className='text-sm text-center text-gray-800'>
                    We&apos;ve done all the heavy lifting so you don&apos;t have to — Ready to take your events to the next level? Contact us today to learn more about how Crowncast can revolutionize the way you vote.
                </h1>
            </div>

            {/* content with left and right sections */}
            <div className='w-[85vw] flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-4'>
                {/* left */}
                <div className='w-full md:w-[50%] flex flex-col items-center justify-center gap-y-4'>
                    {/* text */}
                    <div className='w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='w-full flex flex-col items-center justify-center gap-y-2'>
                            <h2 className='text-xl md:text-2xl text-primary-700 font-inter font-600 text-center'>
                                4,000+
                            </h2>
                            <p className='text-sm text-gray-800'>Global Organizers </p>
                            <p className='text-sm text-gray-500 text-center'>We&apos;ve helped over 4,000 amazing global companies.</p>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center gap-y-2'>
                            <h2 className='text-xl md:text-2xl text-primary-700 font-inter font-600 text-center'>
                                600%
                            </h2>
                            <p className='text-sm text-gray-800'>Return on investment</p>
                            <p className='text-sm text-gray-500 text-center'>Our users have reported an average of ~600% ROI.</p>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center gap-y-2'>
                            <h2 className='text-xl md:text-2xl text-primary-700 font-inter font-600 text-center'>
                                10k
                            </h2>
                            <p className='text-sm text-gray-800'>Global downloads </p>
                            <p className='text-sm text-gray-500 text-center'>Our app has been downloaded over 10k times.</p>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center gap-y-2'>
                            <h2 className='text-xl md:text-2xl text-primary-700 font-inter font-600 text-center'>
                                200+
                            </h2>
                            <p className='text-sm text-gray-800'>5-star reviews</p>
                            <p className='text-sm text-gray-500 text-center'>We&apos;re proud of our 5-star rating with over 200 reviews.</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='w-full md:w-[50%] flex flex-col items-center justify-center gap-y-4'>
                    {/* image */}
                    <img src='/assets/side.svg' className='w-full h-[200px] md:h-[400px] rounded-lg' />
                </div>
            </div>

            {/* more */}
            <div className='w-full bg-gray-50 flex flex-col items-center justify-center gap-y-2 mt-4 py-5 px-3 rounded-md'>
                {/* image */}
                {/* <div className='w-20 h-20 md:w-24 md:h-24 rounded-lg'>
                    <img src='/assets/people/ell.svg' alt='faq' className='w-full h-full object-cover rounded-lg' />
                </div> */}
                {/* heading */}
                <div className='w-full flex flex-col items-center justify-center gap-y-2'>
                    <h1 className='text-md font-inter font-900 text-gray-900'>
                        Start using Crowncast for free
                    </h1>
                    <p className='text-medium font-inter font-400 text-gray-500 text-center'>
                        Join over 4,000+ organizers already growing with Crowncast.
                    </p>
                </div>

                {/* twi buttons, 'Learn more' and 'Get started' */}
                <div className='w-[40%] flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-x-2'>
                    <Button className='w-full md:w-[50%] bg-white text-primary-700 py-2 rounded-lg' title='Learn more' variant='secondary' />
                    <button className='w-full md:w-[50%] bg-primary-700 text-white py-2 rounded-lg'>
                        Get started
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Ad