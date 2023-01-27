import Contestants from "../contestants";
import InfoGraphics from "../infographic";
import PageTop from "./navbar";
import React from "react";

interface ContentAreaProps {
  children?: React.ReactNode;
}

const ContentArea = ({children}: ContentAreaProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 px-6 py-4">
      <PageTop />
      {children}
    </div>
  );
};

export default ContentArea;
