import { Category } from "../../types";
import Select from "react-select";

const Filter = ({
    onChange,
    data
  }: {
    onChange: (e: any) => void;
    data: Category[];
  }) => {


    const options = data.map((category: Category) => {
        return {
            value: category._id,
            label: category.title
        };
    }) as any

  
    return (
      <Select
        isMulti
        name="categories"
        options={options}
        placeholder="Filter"
        className={`w-2/6 h-10 rounded-md border border-green-300`}
        onChange={onChange}
        classNamePrefix="select"
        id="categories-selector"
        // value={}
        // disable when selected options is 4
        // isDisabled = {selectedOptions?.length === 4}
      />
    );
  };
  
  export default Filter;