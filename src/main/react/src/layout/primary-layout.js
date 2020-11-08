import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";

import { Repos } from "../route";

const HomePage = () => <div>Home Page</div>;

// const ReposPage = () => Repos;

export const PrimaryLayout = () => {
  return (
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/repos" component={Repos} />
    </main>
  );
};
