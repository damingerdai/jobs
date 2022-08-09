import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout'
import { useAppSelector } from '@/slices/hook';
import * as React from 'react';
import { Fragment, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '@/slices/login';


export const UserMenu: React.FC = () => {
	const { username } = useAppSelector(state => state.login);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dropdownOpen = Boolean(anchorEl);
	const dispatch = useDispatch();
	const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
		<Fragment>
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
		</Fragment>

  );
}
