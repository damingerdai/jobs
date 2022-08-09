/* eslint-disable react/destructuring-assignment */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useAppSelector } from '../slices/hook';
import { RootState } from '../slices/store';
import { toggleMode } from '../slices/theme';
import { ThemeModePicker } from './themeModePicker';
import { setUsername } from '../slices/login';
import { PaletteMode } from '@mui/material';

interface NavbarProps {
	brand: string;
	toggleMode: (mode: PaletteMode) => void;
}

const Navbar: React.FC<NavbarProps> = props => {
	const { username } = useAppSelector(state => state.login);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const dropdownOpen = Boolean(anchorEl);
	const navigate = useNavigate();
	const mode = useSelector((state: RootState) => state.theme.mode) as PaletteMode;
	const dispatch = useDispatch();

	useEffect(() => {
		navigate('/login');
	}, [username]);

	return (
		<Box sx={{ flexGrow: 1 }} color="primary">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div">
						{props.brand}
					</Typography>
					<Button component={RouterLink} to="/" color="inherit">
						Home
					</Button>
					<Button component={RouterLink} to="/repos" color="inherit">
						Repos
					</Button>
					<Box component="div" sx={{ flexGrow: 1 }} />
					<ThemeModePicker
						mode={mode}
						modeChange={mode => {
							props.toggleMode(mode);
							dispatch(toggleMode(mode));
						}}
					/>
					{username ? (
						<Button
							color="inherit"
							onClick={e => {
								setAnchorEl(e.currentTarget);
							}}
						>
							{username}
						</Button>
					) : (
						<Button component={RouterLink} to="/login" color="inherit">
							Login
						</Button>
					)}
					<Menu
						anchorEl={anchorEl}
						open={dropdownOpen}
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: 'visible',
								filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
								mt: 1.5,
								'& .MuiAvatar-root': {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1
								},
								'&:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									bgcolor: 'background.paper',
									transform: 'translateY(-50%) rotate(45deg)',
									zIndex: 0
								}
							}
						}}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					>
						<MenuItem
							onClick={() => {
								localStorage.removeItem('login');
								dispatch(setUsername(null));
								setAnchorEl(null);
								navigate('/login');
							}}
						>
							<ListItemIcon>
								<Logout fontSize="small" />
							</ListItemIcon>
							Logout
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
