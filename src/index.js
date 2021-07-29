import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/main";
import { Audio } from './libs/audio';
import "./index.css";


const audio = new Audio();
audio.init();

ReactDOM.render(
  <React.StrictMode>
    <Main audio={audio} />
  </React.StrictMode>,
  document.getElementById("root")
);
