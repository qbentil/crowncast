import { Filters } from "../../utils/dump";
import SubHeader from "../subpage-header";
import Table from "./table";
import React from "react";

const Events = () => {

  return (
    <div className="w-full">
      {/* header */}
      <SubHeader title="Events" filters={Filters} />

      {/* table */}
      <Table />
    </div>
  );
};

export default Events;
