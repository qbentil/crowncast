/* eslint-disable @next/next/no-img-element */

import {useState} from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import ImageUploader from '../ImageUploader'

const Settings = () => {
    const [image, setImage] = useState<string | null | undefined>(null)
    const [imageURI, setImageURI] = useState<string | null | undefined>(null) 

    return (
        <div>
            {/*  */}
            <div className="flex flex-col  gap-y-2 mb-3">
                <h2>Personal Information</h2>
                <p>Update your photo and Personal details here!</p>
            </div>
            {/* image and uploader */}
            <div className='flex items0center justify-start gap-x-5'>
                <div className="w-40  rounded-full">
                    <img src="/assets/bentil.jpeg" alt="current" className='border border-t-2 border-t-primary border-b-2 border-b-primary w-full rounded-full' />
                </div>
                <div className='w-3/5 h-72'>
                <ImageUploader 
                    setImageURI={setImageURI}
                    setImage={setImage}
                    image={image}
                    className='w-full h-full'
                />
                </div>
            </div>
            {/* Form */}
            <div className="">
                
            </div>
        </div>
    )
}

export default Settings