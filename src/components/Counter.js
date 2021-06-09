/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import Count from "./helper/Count";
import { InputContext } from "./helper/InputContext";

export default function Counter() {
  const { text } = useContext(InputContext);
  const [count, setCount] = useState({
    words: 0,
    characters: 0,
    charactersSpaces: 0,
    sentences: 0,
    avgWordLength: 0,
    readingTime: 0,
    speakingTime: 0,
    handWritingTime: 0,
  });

  useEffect(() => {
    let words = text.split(" ").filter(function (str) {
      return /\S/.test(str);
    });

    setCount({
      ...count,
      words: words.length,
      characters: words.join("").length,
      charactersSpaces: text.length,
      sentences: /\./g.test(words.join(""))
        ? words.join("").match(/\./g).length
        : 0,
      avgWordLength:
        Math.round((words.join("").length / text.split(" ").length) * 10) / 10,
      readingTime: `${Math.round((words.length / 3.75) * 10) / 10}s`, //225wpm
      speakingTime: `${Math.round((words.length / 2) * 10) / 10}s`, // 120wpm
      handWritingTime: `${
        Math.round((words.length / 0.21666666666) * 10) / 10 // 13wpm
      }s`,
    });
  }, [text]);

  return (
    <div className="w-5/6 my-auto mx-auto mx-8 lg:w-4/6 flex flex-wrap justify-between mt-16 xl:mt-24 text-gray-800 mx-8 text-xl">
      <Count label="Words" count={count.words} />
      <Count label="Characters" count={count.characters} />
      <Count label="Characters (spaces)" count={count.charactersSpaces} />
      <Count label="Sentences" count={count.sentences} />
      <Count label="Avg. word length" count={count.avgWordLength} />
      <Count label="Reading Time" count={count.readingTime} />
      <Count label="Speaking Time" count={count.speakingTime} />
      <Count label="Hand Writing Time" count={count.handWritingTime} />
    </div>
  );
}
