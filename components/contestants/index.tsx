import React from "react";
import Filter from "../filter";
import { Categories } from "../../utils/dump";

const Contestants = () => {
  return (
    <div className="w-full">
      {/* header */}
      <div className="flex items-center justify-between">
        <Filter data={Categories} onChange={() => null} />
      </div>
    </div>
  );
};

export default Contestants;
