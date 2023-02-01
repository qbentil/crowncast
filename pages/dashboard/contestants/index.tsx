import { ContentArea, Login, Sidebar, SubHeader } from "../../../components";

import Head from "next/head";
import React from "react";
import { useStateValue } from "../../../context/StateProvider";
import { Filters } from "../../../utils/dump";

const ContestantsPage = () => {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Login />;
  return (
    <>
      <Head>
        <title>Contestants | Administrator</title>
        <meta name="description" content="CrownCast Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"w-full h-[100vh] flex items-center justify-center"}>
        {/* 25% width for sidebar */}
        <Sidebar />
        {/* 75% width for content */}
        <ContentArea>
          <SubHeader title="Events" filters={Filters} />
        </ContentArea>
      </main>
    </>
  );
};

export default ContestantsPage;
