import Contestants from "../contestants";
import InfoGraphics from "../infographic";
import PageTop from "./navbar";
import React from "react";

const ContentArea = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 px-6 py-4">
      <PageTop />
      <InfoGraphics />
      <Contestants />
    </div>
  );
};

export default ContentArea;
