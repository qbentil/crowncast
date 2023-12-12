import React from 'react'
import Head from 'next/head'
import { Hero, Navbar } from '../components'

const Main = ({ page, children }: { page?: string, children?: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>Crowncast</title>
                <meta name="description" content="Crowncast - Transparency & Accountability" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'w-full min-h-[100vh] flex items-start justify-center'}>
                <Navbar />
                <Hero />
                {children}
            </main>
        </>
    )
}

export default Main