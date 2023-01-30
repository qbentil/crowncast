import { Filters } from "../../utils/dump";
import SubHeader from "../subpage-header";
import ContestantsTable from "./table";
import React from "react";

const Contestants = () => {

  return (
    <div className="w-full">
      {/* header */}
      <SubHeader title="Contestants" filters={Filters} />

      {/* table */}
      <ContestantsTable />
    </div>
  );
};

export default Contestants;
