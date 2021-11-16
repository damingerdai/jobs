import React from 'react'
import { Routers } from './route'

export const ROUTES: Routers = [
	{
		path: '/',
		component: React.lazy(() => import('./home')),
	},
	{
		path: '/login',
		component: React.lazy(() => import('./login')),
	},
	{
		path: '/repos',
		component: React.lazy(() => import('./repos')),
	},
]
