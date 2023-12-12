import React from 'react'
import Link from 'next/link'
const NotFount = () => {
    return (
        <section className="bg-white w-screen h-screen overflow-hidden">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <img className="w-64 h-64 mx-auto mb-8" src={"/assets/404.gif"} alt="404" />
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary ">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Whoops! That page doesn&apos;t exist.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                    <Link href="/" className="inline-flex text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</Link>
                </div>
                <div className="flex items-center justify-center mt-16">
                <span className="text-sm text-gray-500">© 2021 <span className='text-primary'>Crowncast</span>. All rights reserved</span>
                </div>

            </div>
        </section>
    )
}

export default NotFount