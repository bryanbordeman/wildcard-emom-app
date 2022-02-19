import React, { Component } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import Page from '../components/Page'


class WorkoutPage extends Component {
    constructor(props){
        super(props);
        this.state = {data:{}}
        
    }

    // componentDidMount(){
    //     this.getData();
    //  }
    
    // async getData(){
    //     const res = await fetch('./test.json');
    //     const data = await res.json();
    //     console.log(res)
    //  }
    render() { 
        return (
            <Page>
                <WorkoutForm/>
                <h1>WORKOUT</h1>
            </Page>
        );
    }
}
 
export default WorkoutPage;