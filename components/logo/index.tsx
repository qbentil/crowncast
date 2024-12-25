import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className="flex items-center justify-start gap-x-2">
            <Image src={"/assets/logo.svg"} height={60} width={60} alt='logo' />
            <p className="mt-2 text-5xl text-primary font-[600]">
                DMS.
            </p>
        </div>)
}

export default Logo