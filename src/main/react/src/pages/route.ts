import { FC, LazyExoticComponent } from 'react'

export interface Router {
	path: string
	component: LazyExoticComponent<any> | FC;
	index?: boolean
	children?: Router[]
}

export type Routers = Router[]
