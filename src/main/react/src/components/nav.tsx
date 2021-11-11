import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../slices/store';
import { toggleMode } from '../slices/theme';
import { ThemeMode } from '../types/theme';
import { ThemeModePicker } from './themeModePicker';

interface NavbarProps {
  brand: string,
  toggleMode: (mode: ThemeMode) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const mode = useSelector((state: RootState) => state.theme.mode) as ThemeMode;
  const dispatch = useDispatch()

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
          }}/>
          {/* {mode === 'light' && <IconButton aria-label="theme" color="inherit" onClick={() => {
            props.toggleMode('dark');
            dispatch(toggleMode('dark'));
          }}>
            <LightModeRoundedIcon />
          </IconButton>}
          {mode === 'dark' && <IconButton aria-label="theme" color="inherit" onClick={() => {
            props.toggleMode('light')
            dispatch(toggleMode('light'));
          }}>
            <NightlightRoundedIcon />
          </IconButton>} */}
          <Button component={RouterLink} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;