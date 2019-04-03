import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
//import PropTypes from 'prop-types';

import ILayoutProps from './layoutProps.interface';
import Router from '../menu/router';
import Menu from '../menu/menu.component';
import { BrowserRouter } from 'react-router-dom';


const drawerWidth = 240;

const styles = (theme:any) => ({
    appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    appBarSpacer: theme.mixins.toolbar,
    chartContainer: {
      marginLeft: -22,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing.unit * 3,
    },
    drawerPaper: {
      position: 'relative',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      whiteSpace: 'nowrap',
      width: drawerWidth,
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    root: {
      display: 'flex',
    },
    tableContainer: {
      height: 320,
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      ...theme.mixins.toolbar,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 8px',
    }
  });

class Dashboard extends Component<ILayoutProps, any> {
    constructor(props: ILayoutProps) {
        super(props);
    }

    public state = {
      open: true,
    };
  
    public handleDrawerOpen = () => {
      this.setState({ open: true });
    };
  
    public handleDrawerClose = () => {
      this.setState({ open: false });
    };
  
  
    render() {
      const classes = this.props['classes'];

      return (
        <BrowserRouter>
            <div className={classes['root']}>
          <AppBar
            position="absolute"
            className={classNames(classes['appBar'], this.state.open && classes['appBarShift'])}
          >
            <Toolbar disableGutters={!this.state.open} className={classes['toolbar']}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes['menuButton'],
                  this.state.open && classes['menuButtonHidden'],
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap className={classes['title']}>
                To Do App
              </Typography>
             
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes['drawerPaper'], !this.state.open && classes['drawerPaperClose']),
            }}
            open={this.state.open}
          >
            <div className={classes['toolbarIcon']}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <Menu />
          </Drawer>
          <main className={classes['content']}>
            <div className={classes['appBarSpacer']} />
             <Router />
          </main>
        </div>
        </BrowserRouter>
      );
    }
  }

  
// Dashboard['propTypes'] = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default withStyles(styles as any)(Dashboard);