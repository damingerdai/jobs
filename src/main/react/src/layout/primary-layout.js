import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

const HomePage = () => <div>Home Page</div>;

const ReposPage = lazy(() => import("../route/repos"));

export const PrimaryLayout = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/repos" component={ReposPage} />
        </Switch>
      </Suspense>
    </main>
  );
};
