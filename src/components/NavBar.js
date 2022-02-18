import React, { Component } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { LinkBehavior as RouterLink } from '../components/LinkBehavior'



class NavBar extends Component {
    constructor(props){
        super(props)
        this.state ={value: 0}
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event, newValue) {
        // event.preventDefault()
        this.setState({value: newValue});
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
                        icon={<HomeIcon />} 
                        component={ RouterLink }
                        href={'/'}
                        />
                        <BottomNavigationAction 
                        label="Timer" 
                        icon={<TimerIcon />}
                        component={ RouterLink }
                        href={'/timer'}
                        
                        />
                        <BottomNavigationAction 
                        label="Workout" 
                        icon={<FitnessCenterIcon />} 
                        component={ RouterLink }
                        href={'/workout'}
                        />
                    </BottomNavigation>
                </Box>
            </Paper>
        );
    }        
}
 
export default NavBar;
