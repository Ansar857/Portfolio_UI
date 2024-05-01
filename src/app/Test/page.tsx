'use client'
import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/ansar1/base-line-campaign" />
    </div>
  );
};

export default App;