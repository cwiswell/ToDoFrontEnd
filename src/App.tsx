import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import 'typeface-roboto';

import Layout from './layout/layout.component';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>        
        <CssBaseline />
        <Layout />
      </MuiThemeProvider>
    );
  }
}
