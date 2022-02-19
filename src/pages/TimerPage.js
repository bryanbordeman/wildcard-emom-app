import React, { Component } from 'react';
import Timer from '../components/Timer';
import Page from '../components/Page'

class TimerPage extends Component {
    render() { 
        return (
            <Page>
                <Timer totalRounds={2} time={5}/>
            </Page>
        );
    }
}
 
export default TimerPage;