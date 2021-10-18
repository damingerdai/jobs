import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import(/* webpackChunkName: "home" */"../route/home"));

const ReposPage = React.lazy(() => import(/* webpackChunkName: "repos" */"../route/repos"));

export const PrimaryLayout = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/repos" component={ReposPage}/>
        </Switch>
      </Suspense>
    </main>
  );
};
