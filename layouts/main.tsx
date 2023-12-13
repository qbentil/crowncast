import React from 'react'
import Head from 'next/head'
import { Features, Hero, Navbar, Testimonial } from '../components'

const Main = ({ page, children }: { page?: string, children?: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>Crowncast</title>
                <meta name="description" content="Crowncast - Transparency & Accountability" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'min-h-[100vh] flex flex-col items-start justify-center overflow-x-hidden'}>
                <Navbar />
                <Hero />
                <Features />
                <Testimonial />
                {children}
            </main>
        </>
    )
}

export default Main