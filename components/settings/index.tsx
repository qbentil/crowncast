/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Settings = () => {
    return (
        <div>
            {/*  */}
            <div>
                <h2>Personal Information</h2>
                <p>Update your photo and Personal details here!</p>
            </div>
            {/* image and uploader */}
            <div className='flex'>
                <div className="w-40">
                    <img src="/assets/bentil.jpeg" alt="current" className=' w-full rounded-full' />
                </div>
                <div>
                    <button>Upload</button>
                    <button>Remove</button>
                </div>
            </div>

        </div>
    )
}

export default Settings