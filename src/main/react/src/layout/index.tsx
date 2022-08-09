import Box from '@mui/material/Box';
import { Router as PageRouter } from '@/pages/route';

import React, { Suspense, useCallback } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import { ROUTES } from '../pages';


export const PrimaryLayout = () => {

	const renderRouter =  (route: PageRouter) => {
		return <Route index={route.index} key={route.path} path={route.path} element={<route.component/>}>
			{route.children?.map((r) => renderRouter(r))}
		</Route>
	}

	return (<Box component="div">
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{ROUTES.map((route) => renderRouter(route))}
			</Routes>
		</Suspense>
	</Box>)
};

