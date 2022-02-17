import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import TimerPage from '../pages/TimerPage'
import WorkoutPage from '../pages/WorkoutPage';


class Routes extends Component {
    render() { 
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/timer' component={TimerPage} />
                <Route exact path='/workout' component={WorkoutPage} />
                <Route render={() => <h1>Error 404</h1>}/>
            </Switch>
        );
    }
    };
    
export default Routes;