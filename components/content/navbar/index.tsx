import Button from "../../Button";
import { FiUploadCloud } from "react-icons/fi";
import React from "react";
import { useStateValue } from "../../../context/StateProvider";
import { BiPlus } from "react-icons/bi";

const PageTop = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="">
        <h1 className="text-balck text-xl">
          Welcome back, <span className="font-bold">{user?.name || ""}</span>
        </h1>
        <p className="text-sm text-gray-500">Track, manage and forecast your pageantry competition.</p>
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          title="import"
          icon={<FiUploadCloud />}
          onClick={() => console.log("import")}
          variant="secondary"
        />
        <Button
          title="Add"
          icon={<BiPlus />}
          onClick={() => console.log("add")}
        />
      </div>
    </nav>
  );
};

export default PageTop;
