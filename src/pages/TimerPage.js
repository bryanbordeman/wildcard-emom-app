import React, { Component } from 'react';
import Timer from '../components/Timer';
import NavBar from '../components/NavBar'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

class TimerPage extends Component {
    render() { 
        return (
            <div className='App'>
                {/* <ResponsiveAppBar/> */}
                {/* <Timer/> */}
                <h1>Timer</h1>
                <NavBar/>
            </div>
        );
    }
}
 
export default TimerPage;