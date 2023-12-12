import React from "react";
import { DashboardLayout } from "../../../layouts";
import { Settings } from "../../../components";

const Page = () => {
  return (
    <DashboardLayout page={"Settings"} >
      <Settings />
    </DashboardLayout>
  );
};

export default Page;
