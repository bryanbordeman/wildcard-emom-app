import React, { Component } from 'react';
import Timer from '../components/Timer';
import Page from '../components/Page'

class TimerPage extends Component {
    render() { 
        return (
            <Page>
                <Timer/>
                <h1>Timer</h1>
            </Page>
        );
    }
}
 
export default TimerPage;