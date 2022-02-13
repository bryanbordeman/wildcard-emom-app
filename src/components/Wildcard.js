import React, { Component } from 'react';
import Timer from './Timer';
import WorkoutForm from './WorkoutForm';



class Wildcard extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <div>
                <Timer time={10} totalRounds={10}/>
                <WorkoutForm/>
                {/* <WorkoutList/> */}
            </div>
        );
    }
}
 
export default Wildcard;