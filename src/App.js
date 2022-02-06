import React, { Component } from 'react';
import './css/App.css';
import Wildcard from './components/Wildcard';
import MovementPage from './pages/MovementPage';


class App extends Component {
  render() { 
    return (
      <div className='App'>
        <Wildcard/>
        <MovementPage/>
      </div>
    );
  }
}
 
export default App;
