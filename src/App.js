import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Wildcard from './Wildcard';

class App extends Component {
  render() { 
    return (
      <div className='App'>
        <Timer time={10} totalRounds={10}/>
        <Wildcard/>
      </div>
    );
  }
}
 
export default App;
