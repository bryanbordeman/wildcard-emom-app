import React, { Component } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {Link, withRouter} from 'react-router-dom';


class NavBar extends Component {
    constructor(props){
        super(props)
        this.state ={value: 0, path: ''}
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount(){
        const pathname = window.location.pathname;
        this.setState({path : pathname})
    }
    handleChange(event, newValue) {
        event.preventDefault()
        const pathArray = ['/', '/timer', 'workout']
        // this.props.history.push({  pathname: `${pathArray[newValue]}`})
        this.setState({value: newValue, path: pathArray[newValue]});
        
    };

    render() { 
        
        return (
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <Box>
                    
                    <BottomNavigation
                        showLabels
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                        <BottomNavigationAction 
                        label="Home" 
                        icon={<HomeIcon />} 
                        // component={ Link }
                        // to={'/'}
                        />
                        <BottomNavigationAction 
                        label="Timer" 
                        icon={<TimerIcon />}
                        // component={ Link }
                        
                        />
                        <BottomNavigationAction 
                        label="Workout" 
                        icon={<AddToPhotosIcon />} 
                        />
                    </BottomNavigation>
                </Box>
            </Paper>
        );
    }        
}
 
export default withRouter(NavBar);
