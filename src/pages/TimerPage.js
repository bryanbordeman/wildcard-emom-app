import React, { Component } from 'react';
import Timer from '../components/Timer';
import Page from '../components/Page'

class TimerPage extends Component {
    render() { 
        return (
            <Page>
                <Timer time={5} rounds={this.props.rounds} workouts={this.props.workouts}/>
            </Page>
        );
    }
}

export default TimerPage;