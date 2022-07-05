import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Count from "./Count";
import TimeConverter from "./TimeConverter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Count />
    <TimeConverter />
  </StrictMode>,
  rootElement
);
