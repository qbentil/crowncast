import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
interface Props {
  state: "up" | "down";
  title: string;
  value: number;
  preval: number;
}

const Card = ({ state, title, value, preval }: Props) => {
  // calculate percentage change from previous value, round to nearest integer and remove sign
  const percentage = Math.abs(Math.round(((value - preval) / preval) * 100));
  return (
    <div className="flex flex-col py-2 px-3 gap-y-3 border border-gray-300 rounded">
      <div className="flex items-center justify-between">
        <p className="text-sm">{title}</p>
        <SlOptionsVertical className="text-gray-500 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between px-4">
        <div>
          <p className="text-4xl font-bold">{value}</p>
          <div className="flex items-center justify-center">
            {state === "up" ? (
              <AiOutlineArrowUp className="text-green-500" />
            ) : (
              <AiOutlineArrowDown className="text-red-500" />
            )}
            <p className="text-sm">
              <span
                className={`font-bold
                ${state === "up" ? "text-green-500" : "text-red-500"}
              `}
              >
                {percentage}%
              </span>{" "}
              vs Last 24 hours
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {state === "up" ? (
            <BsGraphUp className="text-green-500 text-4xl" />
          ) : (
            <BsGraphDown className="text-red-500 text-4xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
