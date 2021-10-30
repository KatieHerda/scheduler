import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    //adding the transitioned to mode to history array
    setHistory((prev) => {
      //if replace is true, we want to replace the current mode
      if (replace === true) {
        return [...prev];
      }
      return [...prev, newMode];
    });

    //transitioning to the new mode
    setMode((prev) => {
      return newMode;
    });
  };

  const back = function () {
    //set current history with last value popped off
    setHistory((prev) => {
      prev.pop();
      return [...prev];
    });

    //step back to to previous history mode by accessing the index --> value
    setMode((prev) => {
      const historyArr = [...history];

      //if already at initial, return initial. first --> first, not []
      if (historyArr < 1) {
        return prev;
      }

      historyArr.pop();
      return historyArr[historyArr.length - 1];
    });
  };
  return { mode, transition, back };
}
