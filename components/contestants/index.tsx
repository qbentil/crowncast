import React from "react";
import { Categories } from "../../utils/dump";
import { AiOutlineClose } from "react-icons/ai";
import Searchbar from "../searchbar";
import Filter from "../filter";

const Contestants = () => {
  return (
    <div className="w-full">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-8 min-w-[25rem]">
          <Filter data={Categories} onChange={() => null} />
          {/* filters */}
          <div className="flex items-center gap-x-4">
            <div className="flex flex-row-reverse items-center justify-center gap-x-2 bg-primary-50 text-primary-700 rounded px-4 py-1 text-sm shadow-sm cursor-pointer">
              <AiOutlineClose />
              <span>Event</span>
            </div>
            <div className="flex flex-row-reverse items-center justify-center gap-x-2 bg-primary-50 text-primary-700 rounded px-4 py-1 text-sm shadow-sm cursor-pointer">
              <AiOutlineClose />
              <span>Categories</span>
            </div>
          </div>
        </div>

        {/* searchbar */}
        <Searchbar />
      </div>
    </div>
  );
};

export default Contestants;
