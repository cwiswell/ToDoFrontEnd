import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import 'typeface-roboto';

import Layout from './layout/layout';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () =>{
  return (
    <MuiThemeProvider theme={theme}>        
      <CssBaseline />
      <Layout />
    </MuiThemeProvider>
  );
}

export default App;