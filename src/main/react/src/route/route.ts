import { LazyExoticComponent } from "react";

export interface Router {
    path: string;
    component: LazyExoticComponent<any>
}

export type Routers = Router[];