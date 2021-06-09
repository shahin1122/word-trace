import React from "react";

export default function Bar(props) {
  return (
    <div className="bg-gray-100 h-8 lg:h-12 w-full flex flex-row-reverse items-center flex-end bg-green-700  duration-75 bar">
      <div className="tooltip">
        <button
          onClick={props.Copy}
          className="text-base lg:text-2xl duration-100 mr-4 uppercase focus:outline-none transform hover:-translate-y-0.5"
        >
          <span
            className="tooltiptext"
            id="myTooltip"
            style={
              props.showTooltip
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            Copied!
          </span>
          Copy Lorem Ipsum
        </button>
      </div>
    </div>
  );
}
