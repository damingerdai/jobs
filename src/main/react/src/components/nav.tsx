import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface NavbarProps {
  brand: string,
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" >{props.brand}</Typography>
          <Button component={RouterLink} to="/" color="inherit" >Home</Button>
          <Button component={RouterLink} to="/repos" color="inherit" >Repos</Button>
          <Box sx={{ flexGrow: 1 }}/> 
          <Button component={RouterLink} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;