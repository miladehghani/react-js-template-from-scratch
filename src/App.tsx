import React from "react";
import reactImage from "./assets/react-background.jpg";
import reactLogoSVG, {
  ReactComponent as ReactLogoComponent,
} from "./assets/react-logo.svg";
import { Title } from "./Title";

export const App = () => {
  return (
    <div>
      <Title title={"This is react App component"} />
      <ReactLogoComponent />
      <img src={reactLogoSVG} width={"35%"} height={"auto"} />
      <img src={reactImage} width={"50%"} height={"auto"} />
    </div>
  );
};
