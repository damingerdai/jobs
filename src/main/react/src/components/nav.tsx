import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface NavbarProps {
  brand: string,
  toggleMode: (mode: 'light' | 'dark') => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [mode, setMode] = useState('light');

  const toggleMode = (mode: 'light' | 'dark') => {
    setMode(mode);
    props.toggleMode(mode)
  }

  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h6" component="div" >{props.brand}</Typography>
          <Button component={RouterLink} to="/" color="inherit" >Home</Button>
          <Button component={RouterLink} to="/repos" color="inherit" >Repos</Button>
          <Box component="div" sx={{ flexGrow: 1 }} />
          {mode === 'light' && <IconButton aria-label="theme" color="inherit" onClick={() => toggleMode('dark')}>
            <LightModeRoundedIcon />
          </IconButton>}
          {mode === 'dark' && <IconButton aria-label="theme" color="inherit" onClick={() => toggleMode('light')}>
            <NightlightRoundedIcon />
          </IconButton>}
          <Button component={RouterLink} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;