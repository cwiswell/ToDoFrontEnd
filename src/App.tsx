import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import 'typeface-roboto';

import Home from './home/home.component'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home></Home>
      </MuiThemeProvider>
    );
  }
}
