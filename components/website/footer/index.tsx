import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen overflow-x-hidden flex flex-col md:flex-row items-center justify-center md:justify-between p-6">
      {/* logo */}
      <div className="flex items-center justify-center">
        <img src="/assets/crowncast-alt.svg" alt="logo" className="w-[70%] h-full" />
        <div className="flex flex-col items-start justify-center">
          {/* <span className="text-2xl font-bold">Crowncast </span> */}
        </div>
      </div>

      {/* footer social links */}
      <div className="flex items-center justify-center space-x-4 ">
      </div>

      {/* all rights reserved */}
      <div className="flex flex-col md:flex-row my-2 items-center justify-center gap-x-4 font-inter text-sm text-gray-400">
        <span className="">© 2021 - {new Date().getFullYear()} Crowncast. All rights reserved.</span>
        <Link href="/" className="underline text-primary-700">Terms of Service</Link>
      </div>
    </div>
  )
}

export default Footer