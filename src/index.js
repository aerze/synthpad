import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/main";
import { SampleManager } from "./libs/sampleManager";
import "./index.css";

const sm = new SampleManager();
sm.init();

ReactDOM.render(
  <React.StrictMode>
    <Main sm={sm} />
  </React.StrictMode>,
  document.getElementById("root")
);
