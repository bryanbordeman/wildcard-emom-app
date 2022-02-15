import React, { Component } from 'react';
import './css/App.css';
import Wildcard from './components/Wildcard';
import MovementPage from './pages/MovementPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';

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
          <Wildcard/>
          <MovementPage/>
        </div>
      </ThemeProvider>
    );
  }
}
 
export default App;
