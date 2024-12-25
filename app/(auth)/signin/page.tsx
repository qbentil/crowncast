"use client";

import BouncingSquaresLoader from "@/components/preloader";
import LoginPage from "@/components/auth/signin";
import React  from "react";
import { useAuthContext } from "@/hooks/userContext";

const Page = () => {
  const { user } = useAuthContext();

  if (user) {
    return <BouncingSquaresLoader />
  }
  return <LoginPage />;
};

export default Page;
