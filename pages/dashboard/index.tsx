import React from "react";
import { DashboardLayout } from "../../layouts";
import InfoGraphics from "../../components/infographic";
import Admins from "../../components/admins";

const Page = () => {
  return (
    <DashboardLayout page={"Dashboard"} >
      <InfoGraphics />
      <Admins />
    </DashboardLayout>
  );
};

export default Page;
