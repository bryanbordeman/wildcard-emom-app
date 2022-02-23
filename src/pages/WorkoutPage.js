import React, { Component } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import Page from '../components/Page'


class WorkoutPage extends Component {
    constructor(props){
        super(props);
        this.state = {}
        
    }
    render() { 
        return (
            <Page>
                <WorkoutForm getWorkouts={this.props.getWorkouts}/>
            </Page>
        );
    }
}
 
export default WorkoutPage;