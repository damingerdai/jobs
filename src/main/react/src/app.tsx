import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimaryLayout } from './layout';

import { Navbar } from "./shared";

import "./styles.scss";

function App() {
  return (
    <div>
        <Navbar brand={"Jobs系统"} />
        <PrimaryLayout/>
      </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
