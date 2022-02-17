import React, { Component } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import NavBar from '../components/NavBar'


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
            <div className='App'>
                <WorkoutForm/>
                <NavBar/>
            </div>
        );
    }
}
 
export default WorkoutPage;