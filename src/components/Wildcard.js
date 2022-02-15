import React, { Component } from 'react';
import Timer from './Timer';
import WorkoutForm from './WorkoutForm';
import NavBar from './NavBar'
import ResponsiveAppBar from './ResponsiveAppBar';


class Wildcard extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <div>
                {/* <Timer time={10} totalRounds={10}/> */}
                <ResponsiveAppBar/>
                <WorkoutForm/>
                {/* <WorkoutList/> */}
                <NavBar/>
            </div>
        );
    }
}
 
export default Wildcard;