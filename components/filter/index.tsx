import { Category } from "../../types";
import { IoFilterOutline, IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Searchbar from "../searchbar";

type OptionType = {
  value: string;
  label: string;
};
const Filter = ({
  onChange,
  data,
}: {
  onChange: (e: any) => void;
  data: Category[];
}) => {
  const options = data.map((category: Category) => {
    return {
      value: category._id,
      label: category.title,
    };
  }) as OptionType[];
  const onSearch = (e:any):void => {
    const value = e.target.value;
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filtered);
  }
  const [selected, setSelected] = useState(options[0]);
  const [filtered, setFiltered] = useState<OptionType[]>(options);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2  text-dark gap-x-2 cursor-pointer hover:shadow"
      >
        <IoFilterOutline />
        <span className="text-sm">More filters</span>
      </div>
      {isOpen && (
        <div className="absolute top-10 left-0 w-full z-10  rounded-lg">
          {/* list of options */}
          <div
            id="dropdownSearch"
            className="z-10 bg-white rounded shadow w-60"
          >
            <div className="p-3">
              <Searchbar onSearch={onSearch} />
            </div>
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 ">
              {filtered &&
                filtered.map((option: OptionType) => (
                  <li key={option.value} className="cursor-pointer block">
                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                      <input
                        id={option.value}
                        type="checkbox"
                        value={option.value}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor={option.value}
                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                      >
                        {option.label}
                      </label>
                    </div>
                  </li>
                ))}
              {filtered.length === 0 && (
                <li className="cursor-pointer block">
                  <div className="flex items-center p-2 rounded hover:bg-gray-100">
                    <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded">
                      No results found
                    </label>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
