import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimaryLayout } from './layout';

import  Navbar  from "./components/nav";

import "./styles.scss";

function App() {
  return (
    <React.Fragment>
      <Navbar brand={"Jobs UI"} />
      <PrimaryLayout />
    </React.Fragment>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
