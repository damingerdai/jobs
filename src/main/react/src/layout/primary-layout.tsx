import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../route";

export const PrimaryLayout = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {ROUTES.map((route) => <Route key={route.path} path={route.path} element={<route.component/>} />)}
        </Routes>
      </Suspense>
    </main>
  );
};
