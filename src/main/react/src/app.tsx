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
					<Flex>
						<CssBaseline />
						<AppBar position="absolute" open={open}>
							<Toolbar
								sx={{
									pr: '24px' // keep right padding when drawer closed
								}}
							>
								<IconButton
									edge="start"
									color="inherit"
									aria-label="open drawer"
									onClick={toggleDrawer}
									sx={{
										marginRight: '36px',
										...(open && { display: 'none' })
									}}
								>
									<MenuIcon />
								</IconButton>
								<Typography
									component="h1"
									variant="h6"
									color="inherit"
									noWrap
									sx={{ flexGrow: 1 }}
								>
									Job UI
								</Typography>
								<IconButton color="inherit">
									<Badge badgeContent={4} color="secondary">
										<NotificationsIcon />
									</Badge>
								</IconButton>
							</Toolbar>
						</AppBar>
						<Drawer variant="permanent" open={open}>
							<Toolbar
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
									px: [1]
								}}
							>
								<IconButton onClick={toggleDrawer}>
									<ChevronLeftIcon />
								</IconButton>
							</Toolbar>
							<Divider />
							<List component="nav">{mainListItems}</List>
						</Drawer>
						<Box
							component="main"
							sx={{
								backgroundColor: (theme: any) =>
									theme.palette.mode === 'light'
										? theme.palette.grey[100]
										: theme.palette.grey[900],
								flexGrow: 1,
								height: '100vh',
								overflow: 'auto'
							}}
						>
							<Toolbar />
							<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
								<PrimaryLayout />
							</Container>
						</Box>
						{/* <Navbar
							brand="Jobs UI"
							toggleMode={mode => {
								const newTheme = createTheme({
									palette: {
										mode
									}
								});
								setTheme(newTheme);
								const bgColor = newTheme.palette.background.paper;
								document.body.style.backgroundColor = bgColor;
							}}
						/> */}
						{/* <PrimaryLayout /> */}
					</Flex>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	);
};
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
