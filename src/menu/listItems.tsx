import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/home" style={{textDecoration: 'none'}}>
      <ListItem button >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        < ListItemText primary="Home" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Active To Do Lists" />
    </ListItem>   
    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Closed To Do Lists" />
    </ListItem>   
  </div>
);