import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GithubIcon from '@mui/icons-material/GitHub';

import { Link as RouterLink } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={RouterLink} to="/" color="inherit">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component={RouterLink} to="/repos" color="inherit">
      <ListItemIcon>
        <GithubIcon />
      </ListItemIcon>
      <ListItemText primary="Repos" />
    </ListItemButton>
  </React.Fragment>
);
