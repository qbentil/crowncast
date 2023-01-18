import { AiOutlineClose } from "react-icons/ai";
import Filter from "../filter";
import React from "react";
import Searchbar from "../searchbar";
import { useState } from "react";
import { OptionType } from "../../types";
const filters = [
  {
    value : "votes",
    label: "Votes"
  },
  {
    value: "events",
    label: "Events"
  },
  {
    value: "categories",
    label: "Categories"
  }
]

const Contestants = () => {
  const [filterby, setFilterby] = useState<OptionType[] | []>([])
  const [data, setData] = useState<OptionType[] | []>(filters)
  const filterChange = (option: OptionType) => {
    // check if option is already in filterby
    const isOptionInFilter = filterby.find((item: OptionType) => item.value === option.value);
    if(isOptionInFilter) {
      const newFilter = filterby.filter((item: OptionType) => item.value !== option.value);
      setFilterby(newFilter);

    } else {
      setFilterby([...filterby, option]);
    }
  }
  const removeSelect = (option: OptionType) => {
    const newFilter = filterby.filter((item: OptionType) => item.value !== option.value);
    setFilterby(newFilter);
  }
  return (
    <div className="w-full">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-8 min-w-[25rem]">
          <Filter options={data} selected={filterby} onChange={filterChange} />
          {/* filters */}
          <div className="flex items-center gap-x-4">
              {
                filterby.length > 0 && filterby.map((option: OptionType) => (
                  <div key={option.value} className="flex flex-row-reverse items-center justify-center gap-x-2 bg-primary-50 text-primary-700 rounded px-4 py-1 text-sm shadow-sm cursor-pointer">
                  <AiOutlineClose onClick={() => removeSelect(option)} />
                  <span>{option.label}</span>
                </div>
                ))
              }
          </div>
        </div>

        {/* searchbar */}
        <Searchbar />
      </div>
    </div>
  );
};

export default Contestants;
