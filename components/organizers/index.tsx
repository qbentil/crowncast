import { OptionType } from '../../interfaces'
import React from "react";
import SubHeader from "../admins/table/subpage-header";
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
    <div className="w-full">

      {/* table */}
      <Table />
    </div>
  );
};

export default Organizers;
