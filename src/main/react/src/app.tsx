import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './slices/store';
import { PrimaryLayout } from './layout';
import React from 'react';
import './styles.scss';

export const App: React.FC = () => {
	const [mode, setMode] = useState<PaletteMode>('light');
	const colorMode = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === 'light' ? 'dark' : 'light'
				);
			}
		}),
		[]
	);
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode
				}
			}),
		[mode]
	);

	return (
		<BrowserRouter>
			<Provider store={store}>
				<CssVarsProvider>
					<PrimaryLayout />
				</CssVarsProvider>
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
