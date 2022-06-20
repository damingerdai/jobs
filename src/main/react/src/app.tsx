import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

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
root.render(<App />);
