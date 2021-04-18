import React from "react";
import reactImage from "./assets/react-background";

export const App = () => {
  return (
    <div>
      <h1>This is react App component</h1>
      <img src={reactImage} width={"50%"} height={"auto"} />
    </div>
  );
};
