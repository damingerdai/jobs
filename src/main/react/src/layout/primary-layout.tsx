import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../route";

export const PrimaryLayout = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {ROUTES.map((route) => <Route exact path={route.path} component={route.component} />)}
        </Switch>
      </Suspense>
    </main>
  );
};
