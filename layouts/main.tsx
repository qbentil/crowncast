import React from 'react'
import Head from 'next/head'

const Main = ({ page, children }: { page?: string, children?: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>Crowncast</title>
                <meta name="description" content="Crowncast - Transparency & Accountability" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'w-full h-[100vh] flex items-center justify-center'}>
                {/* Coming soon */}
                <p className="text-2xl text-gray-500">Coming soon!</p>
            </main>
        </>
    )
}

export default Main