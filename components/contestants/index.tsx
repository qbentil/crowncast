import { Filters } from "../../utils/dump";
import React from "react";
import SubHeader from "../subpage-header";
import Table from "./table";

const Contestants = () => {

  return (
    <div className="w-full">
      {/* header */}
      <SubHeader title="Contestants" filters={Filters} />

      {/* table */}
      <Table />
    </div>
  );
};

export default Contestants;
