

import Head from "next/head";
import React from "react";
import { ContentArea, Login, Sidebar } from "../components";
import { useStateValue } from "../context/StateProvider";


const Dashboard = ({ page, children }: { page: string, children?: React.ReactNode }) => {
    const [{ user }, dispatch] = useStateValue();
    if (!user) return <Login />;
    return (
        <>
            <Head>
                <title>{page} | Administrator</title>
                <meta name="description" content="CrownCast Portal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"w-full h-[100vh] flex items-center justify-center"}>
                {/* 25% width for sidebar */}
                <Sidebar />
                {/* 75% width for content */}
                <ContentArea>
                    {children}
                </ContentArea>
            </main>
        </>
    );
};

export default Dashboard;
