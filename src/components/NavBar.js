import React, { Component } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
// import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link as RouterLink } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state ={value: '/'}
        this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount(){
        const pathname = window.location.pathname;
        this.setState({value: pathname})
    }

    handleChange(event, newValue) {
        this.setState({value: newValue});
        clearInterval()
    };

    render() { 
        const { value } = this.state
        return (
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <Box>
                    <BottomNavigation
                        showLabels
                        value={ value }
                        onChange={ this.handleChange }
                        >
                        <BottomNavigationAction 
                        label="Home" 
                        value='/'
                        icon={<HomeIcon />} 
                        component={ RouterLink }
                        to={'/'}
                        />
                        <BottomNavigationAction 
                        label="Timer" 
                        value='/timer'
                        icon={<TimerIcon />}
                        component={ RouterLink }
                        to={'/timer'}
                        
                        />
                        <BottomNavigationAction 
                        label="Workout"
                        value='/workout' 
                        icon={<FitnessCenterIcon />} 
                        component={ RouterLink }
                        to={'/workout'}
                        />
                    </BottomNavigation>
                </Box>
            </Paper>
        );
    }        
}
 
export default NavBar;
