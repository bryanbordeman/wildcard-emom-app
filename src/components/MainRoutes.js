import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TimerPage from '../pages/TimerPage'
import WorkoutPage from '../pages/WorkoutPage';

class MainRoutes extends Component {
    constructor(props){
        super(props);
        this.state ={
            workouts:[],
            rounds: 0}

        this.getWorkouts = this.getWorkouts.bind(this)
        this.getRounds = this.getRounds.bind(this)
    }
    
    getWorkouts(workouts){
        this.setState({workouts: workouts})
        // console.log(workouts)
    }
    getRounds(rounds){
        this.setState({rounds: rounds})
        // console.log(rounds)
    }
    render() { 
        
        return (
            <div>
                <Routes>
                    <Route exact path='/' element={<HomePage getRounds={this.getRounds}/>} />
                    <Route exact path='/timer' element={<TimerPage rounds={this.state.rounds} workouts={this.state.workouts}/>} />
                    <Route exact path='/workout' element={<WorkoutPage getWorkouts={this.getWorkouts}/>} />
                    <Route render={() => <h1>Error 404</h1>}/>
                </Routes>
            </div>
        );
    }
    };
    
export default MainRoutes;