import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Drawer } from './components/drawer';
import { store } from './slices/store';

import { Flex } from './components';
import { AppBar } from './components/appBar';
import './styles.scss';
import { mainListItems } from './components/items';
import { PrimaryLayout } from './layout';
import React from 'react';

const App = () => {
	const Theme = createTheme();
	const [open, setOpen] = useState(true);
	const [theme, setTheme] = useState(Theme);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<PrimaryLayout/>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	);
};
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.Fragment>
		<CssBaseline />
		<App />
	</React.Fragment>
);
