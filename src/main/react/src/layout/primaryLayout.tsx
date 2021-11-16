import Box from '@mui/material/Box';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../pages';


export const PrimaryLayout = () => (
	<Box component="div">
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{ROUTES.map((route) => <Route key={route.path} path={route.path} element={<route.component/>} />)}
			</Routes>
		</Suspense>
	</Box>
)
