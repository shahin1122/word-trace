import React, { useContext, useState } from "react";
import Bar from "./helper/Bar";
import { InputContext } from "./helper/InputContext";
import LoremIpsum from "./helper/LoremIpsum";
import './inputField.css'

export default function InputField() {
  const { text, setText } = useContext(InputContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const Copy = () => {
    navigator.clipboard.writeText(LoremIpsum);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  return (
    <div
      className="inputStyle input-field w-5/6 mx-auto mx-8 lg:w-4/6 flex flex-col items-center mt-8 lg:mt-16 text-gray-800 mx-8 text-xl"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <textarea
        className="rounded textarea w-full p-4 focus:outline-none break-words"
        style={{
          maxHeight: "28rem",
          height: "28rem",
        }}
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Bar className="barStyle" Copy={Copy} showTooltip={showTooltip} />
    </div>
  );
}
