import React, { Component } from 'react';
import './css/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';
import Routes from './components/Routes';


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
        <Routes/>
        <div className='App'>
        </div>
      </ThemeProvider>
    );
  }
}
 
export default App;
