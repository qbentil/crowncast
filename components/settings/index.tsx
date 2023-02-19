/* eslint-disable @next/next/no-img-element */

import React from 'react'

const Settings = () => {
    return (
        <div>
            {/*  */}
            <div className="flex flex-col  gap-y-2 mb-3">
                <h2>Personal Information</h2>
                <p>Update your photo and Personal details here!</p>
            </div>
            {/* image and uploader */}
            <div className='flex items0center justify-start gap-x-5'>
                <div className="w-40 border border-t-2 border-t-primary border-b-2 border-b-primary rounded-full">
                    <img src="/assets/bentil.jpeg" alt="current" className=' w-full rounded-full' />
                </div>
                <div className="border-2 border-dashed rounded-lg w-3/5 flex items-center justify-center">
                    <button>Upload</button>
                    <button>Remove</button>
                </div>
            </div>

        </div>
    )
}

export default Settings