import React, { Component } from 'react';
import Timer from '../components/Timer';
import NavBar from '../components/NavBar'

class TimerPage extends Component {
    render() { 
        return (
            <div>
                <Timer/>
                <NavBar/>
            </div>
        );
    }
}
 
export default TimerPage;