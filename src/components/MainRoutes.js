import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TimerPage from '../pages/TimerPage'
import WorkoutPage from '../pages/WorkoutPage';

class MainRoutes extends Component {
    render() { 
        return (
            <div>
                <Routes>
                    <Route exact path='/' element={<HomePage/>} />
                    <Route exact path='/timer' element={<TimerPage/>} />
                    <Route exact path='/workout' element={<WorkoutPage/>} />
                    <Route render={() => <h1>Error 404</h1>}/>
                </Routes>
            </div>
        );
    }
    };
    
export default MainRoutes;