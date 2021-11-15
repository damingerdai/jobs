import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useAppSelector } from '../slices/hook';
import { RootState } from '../slices/store';
import { toggleMode } from '../slices/theme';
import { ThemeMode } from '../types/theme';
import { ThemeModePicker } from './themeModePicker';

interface NavbarProps {
  brand: string,
  toggleMode: (mode: ThemeMode) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { username } = useAppSelector(state => state.login);
  const navigate = useNavigate();
  const mode = useSelector((state: RootState) => state.theme.mode) as ThemeMode;
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/login");
  },[username])

  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h6" component="div" >{props.brand}</Typography>
          <Button component={RouterLink} to="/" color="inherit" >Home</Button>
          <Button component={RouterLink} to="/repos" color="inherit" >Repos</Button>
          <Box component="div" sx={{ flexGrow: 1 }} />
          <ThemeModePicker mode={mode} modeChange={(mode) => {
            props.toggleMode(mode);
            dispatch(toggleMode(mode));
          }} />
          {username
           ? <Button color="inherit">{username}</Button> 
           : <Button component={RouterLink} to="/login" color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;