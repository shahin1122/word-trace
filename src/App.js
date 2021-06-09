import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { InputContext } from "./components/helper/InputContext";
import Counter from "./components/Counter";

export default function App() {
  const [text, setText] = useState("");
  const providerValue = useMemo(() => ({ text, setText }), [text, setText]);

  return (
    <div>
      <InputContext.Provider value={providerValue}>
        <Header />
        <InputField />
        <Counter />
      </InputContext.Provider>
    </div>
  );
}
