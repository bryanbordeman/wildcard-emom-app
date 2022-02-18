import React, { Component } from 'react';
import './css/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';
import MainRoutes from './components/MainRoutes';


const wildcardTheme = createTheme({
  palette: {
    primary: blue,
    secondary:
    {
      main: lightBlue[50],
    }
  },
});


class App extends Component {
  render() { 
    return (
      <ThemeProvider theme={wildcardTheme}>
        
        <div className='App'>
        <MainRoutes/>
        </div>
      </ThemeProvider>
    );
  }
}
 
export default App;
