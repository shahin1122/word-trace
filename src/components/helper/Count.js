import React from "react";

export default function Count(props) {
  return (
    <div
      className="flex w-full md:w-72 justify-between bg-white text-xl items-center mb-10 whitespace-nowrap"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="pl-2 pr-1 py-2 lg:py-2.5">{props.label}</div>
      <div className="bg-green-600 text-white w-1/3 h-full grid place-items-center">
        {props.count}
      </div>
    </div>
  );
}
