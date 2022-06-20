import { AppBar } from '@/components/appBar';
import { Drawer } from '@/components/drawer';
import { Flex } from '@/components/flex';
import { mainListItems } from '@/components/items';
import { UserMenu } from '@/components/userMenu';
import { useAppSelector } from '@/slices/hook';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const AdminLayout: React.FC = () => {
	const { username } = useAppSelector(state => state.login);
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
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
					<UserMenu />
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
					<Outlet />
				</Container>
			</Box>
		</Flex>
	);
};
