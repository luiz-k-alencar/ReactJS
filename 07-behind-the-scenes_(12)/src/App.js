import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/UI/Button/demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraoph) => !prevShowParagraoph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show paragraph!</Button>
    </div>
  );
}

export default App;
