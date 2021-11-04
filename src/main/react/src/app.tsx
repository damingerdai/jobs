import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimaryLayout } from './layout';

import { Navbar } from "./components";

import "./styles.scss";

function App() {
  return (
    <div>
        <Navbar brand={"Jobs UI"} />
        <PrimaryLayout/>
      </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
