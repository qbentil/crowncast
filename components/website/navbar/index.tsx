import React from 'react'
import Link from 'next/link'
import { RxHamburgerMenu, RxTwitterLogo } from 'react-icons/rx'
import { MdFacebook } from 'react-icons/md'
import { CiInstagram } from 'react-icons/ci'

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
    return (
        <nav className="w-full md:w-[85vw] h-[6vh] bg-white flex items-center justify-between px-6 py-8 relative">
            <Link href="/" className="flex items-center">
                <img src="/assets/crowncast-alt.svg" className="w-[70%] md:w-[60%] md:w-full h-full" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Crowncast</span>
            </Link>
            <button onClick={() => setIsMobileNavOpen(true)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-base rounded-lg md:hidden hover:bg-gray-100 " >
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu className="w-6 h-6 text-gray-500 hover:cursor-pointer hover:text-primary" />
            </button>
            <div className="hidden w-full md:flex items-center justify-center gap-x-8" id="navbar-default">
                <Link href="/" className="text-base font-medium text-primary hover:text-hover">Home</Link>
                <Link href="/about" className="text-base font-medium text-primary hover:text-hover">Features</Link>
                <Link href="/about" className="text-base font-medium text-primary hover:text-hover">About</Link>
                <Link href="/contact" className="text-base font-medium text-primary hover:text-hover">Contact</Link>
                <Link href="/faqs" className="text-base font-medium text-primary hover:text-hover">FAQs</Link>
            </div>
            {/* Auth */}
            <div className="hidden md:flex items-center justify-center gap-x-8">
                <button className="text-base font-medium bg-primary px-5 py-1 rounded-md text-white hover:text-primary hover:bg-white transition-all duration-300">Login</button>
            </div>

            {/* mobile navs */}
            {
                isMobileNavOpen && (
                    <div className="flex flex-col justify-between md:hidden items-center justify-between w-screen h-screen bg-gray-50 absolute top-0 left-0 z-10 px-6 pb-12 pt-5" id="navbar-default">

                        {/* close icon, top-right corner */}

                        {/* logo */}
                        <div className='flex items-center justify-between w-full'>
                            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/assets/crowncast-alt.svg" className="w-[80%] md:w-full h-full" alt="Logo" />
                            </div>
                            <button onClick={() => setIsMobileNavOpen(false)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-base rounded-lg md:hidden hover:bg-gray-100 " >
                                <span className="sr-only">Open main menu</span>
                                <RxHamburgerMenu className="w-6 h-6 text-gray-500 hover:cursor-pointer hover:text-primary" />
                            </button>
                        </div>

                        {/* links */}
                        <div className="w-[70%] flex flex-col gap-y-5 items-center justify-center -mt-24">
                            <Link href="/" className="text-base font-medium text-primary hover:text-hover hover:bg-gray-200 py-1 text-center px-5 w-full rounded-sm">Home</Link>
                            <Link href="/about" className="text-base font-medium text-primary hover:text-hover hover:bg-gray-200 py-1 text-center px-5 w-full rounded-sm">Features</Link>
                            <Link href="/about" className="text-base font-medium text-primary hover:text-hover hover:bg-gray-200 py-1 text-center px-5 w-full rounded-sm">About</Link>
                            <Link href="/contact" className="text-base font-medium text-primary hover:text-hover hover:bg-gray-200 py-1 text-center px-5 w-full rounded-sm">Contact</Link>
                            <Link href="/faqs" className="text-base font-medium text-primary hover:text-hover hover:bg-gray-200 py-1 text-center px-5 w-full rounded-sm">FAQs</Link>
                            <button className="text-base font-medium bg-primary px-5 py-1 rounded-md text-white hover:text-primary hover:bg-white w-full transition-all duration-300">Login</button>
                        </div>

                        {/* footer at the bottom */}
                        <div className="w-full flex flex-col items-center justify-end gap-y-5">
                            <div className="flex items-center justify-center gap-x-5">
                                <MdFacebook className="w-6 h-6 text-primary" />
                                <RxTwitterLogo className="w-6 h-6 text-primary" />
                                <CiInstagram className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm text-gray-500">© 2021 <span className='text-primary'>Crowncast</span>. All rights reserved</span>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar