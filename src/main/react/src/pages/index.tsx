import { AdminLayout } from '@/layout/adminLayout';
import React from 'react';

import { Routers } from './route';

export const ROUTES: Routers = [
	{
		path: '/',
		component: AdminLayout,
		children: [
			{
				path: '',
				index: true,
				component: React.lazy(() => import('./home')),
			},
			{
				path: 'home',
				component: React.lazy(() => import('./home')),
			},
			{
				path: 'repos',
				component: React.lazy(() => import('./repos')),
			},
		]
	},
	{
		path: '/login',
		component: React.lazy(() => import('./login')),
	},
	{
		path: '*',
		component: React.lazy(() => import('./login')),
	}
];
