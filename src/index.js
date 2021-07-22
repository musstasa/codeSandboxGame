import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { App } from "./components/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
