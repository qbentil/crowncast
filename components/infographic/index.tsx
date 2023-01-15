import React from "react";
import Card from "./card";

interface Props {
  state: "up" | "down";
  title: string;
  value: number;
  preval: number;
}

const Info = [
  {
    state: "down",
    title: "Total Votes",
    preval: 100,
    value: 50,
  },
  {
    state: "up",
    title: "Total Contestants",
    preval: 100,
    value: 120,
  },
  {
    state: "down",
    title: "Total Categories",
    preval: 12,
    value: 8,
  },
] as Props[];

const InfoGraphics = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Info.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default InfoGraphics;
