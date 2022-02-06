import React, { Component } from 'react';

class Workout extends Component {
     
    render() { 
        const {min, max, movement} = this.props
        return (
            <div>
                {/* <div>{min}</div>
                <div>{max}</div>
                <div>{movement}</div>
                <button>Delete</button>
                <button>Edit</button> */}
            </div>
        );
    }
}
 
export default Workout;