import React from 'react'
import { Transition } from '../../../utils/animate'
import { motion } from 'framer-motion'
const FQAs = () => {
  return (
    <div className="w-full bg-whte overflow-x-hidden flex flex-col items-center justify-center py-4">
      <div className='w-[85vw] h-full flex flex-col items-center justify-center'>
        {/* heading */}
        <div className='w-full flex flex-col items-center justify-center gap-y-2 mb-4'>
          <h1 className='text-sm text-center text-primary'>
            FAQs
          </h1>
          <p className='text-xl md:text-3xl text-center md:mt-3'>
            Frequently asked questions
          </p>
          {/* actions */}
          <h1 className='text-sm text-center text-gray-800'>
            Everything you need to know about the Crowncast.
          </h1>
        </div>

      </div>
    </div>
  )
}

export default FQAs