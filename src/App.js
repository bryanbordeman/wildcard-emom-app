import React, { Component } from 'react';
import './css/App.css';
import Wildcard from './components/Wildcard';
import WorkoutPage from './pages/WorkoutPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';
import { Route, Switch } from 'react-router-dom';
import TimerPage from './pages/TimerPage'
import Home from './pages/Home';

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
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/timer' component={TimerPage} />
          <Route exact path='/workout' component={WorkoutPage} />
          <Route render={() => <h1>Error 404</h1>}/>
        </Switch>
        <div className='App'>
          <Wildcard/>
          {/* <WorkoutPage/> */}
        </div>
      </ThemeProvider>
    );
  }
}
 
export default App;
