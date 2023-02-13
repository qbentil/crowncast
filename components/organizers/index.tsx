import { OptionType } from '../../types'
import React from "react";
import SubHeader from "../subpage-header";
import Table from "./table";

const Filters = [
  {
    value: "Company",
    label: "Company",
  },
  {
    value: "Name",
    label: "Name",
  },
  {
    value: "Years",
    label: "Date Joined",
  }
] as OptionType[]


const Organizers = () => {

  return (
    <div className="w-full">d
      {/* header */}
      <SubHeader title="Organizers" filters={Filters} />

      {/* table */}
      <Table />
    </div>
  );
};

export default Organizers;
