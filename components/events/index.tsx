import { OptionType } from '../../interfaces'
import React from "react";
import SubHeader from "../subpage-header";
import Table from "./table";

const Filters = [
  {
    value: "Opening Date",
    label: "Opening Date",
  },
  {
    value: "Organizer",
    label: "Organizer",
  },
  {
    value: "Cost /vote",
    label: "Cost /vote",
  },
  {
    value: "Category",
    label: "Category",
  }
] as OptionType[]


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
