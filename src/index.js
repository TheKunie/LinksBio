import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import AppWrapper from "./appwrapper.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
  rootElement
);
