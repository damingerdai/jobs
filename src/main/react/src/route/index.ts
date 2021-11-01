import React from "react";
import { Routers } from "./route";

export const ROUTES: Routers = [
    {
        path: '/',
        component: React.lazy(() => import("./home"))
    },
    {
        path: '/repos',
        component: React.lazy(() => import("./repos"))
    }
];