import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = ({ onSearch }: { onSearch?: (e:any) => void }) => {
  return (
    <>
      <label htmlFor="input-group-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearchOutline />
        </div>
        <input
          type="text"
          id="input-group-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 "
          placeholder="Search"
          onChange={onSearch}
        />
      </div>
    </>
  );
};

export default Searchbar;
