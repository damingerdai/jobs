import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './slices/store';
import { PrimaryLayout } from './layout';
import Navbar from './components/nav';

import './styles.scss';


const App = () => {
	const Theme = createTheme();
	const [theme, setTheme] = useState(Theme);

	return (
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Navbar brand="Jobs UI" toggleMode={(mode) => {
						const newTheme = createTheme({
							palette: {
								mode
							}
						});
						setTheme(newTheme);
						const bgColor = newTheme.palette.background.paper;
						document.body.style.backgroundColor = bgColor;
					}} />
					<PrimaryLayout />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
