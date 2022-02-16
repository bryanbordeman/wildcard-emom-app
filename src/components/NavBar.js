import React, { Component } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
// import {Link as MaterialLink} from '@mui/material';
import { withRouter } from 'react-router-dom';


class NavBar extends Component {
    constructor(props){
        super(props)
        this.state ={value: ''}
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event, newValue) {
        this.setState({value: newValue});
        this.props.history.push({  pathname: `/${newValue}`})
    };

    render() { 
        return (
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                    <BottomNavigation sx={{ width: 500 }} value={this.state.value} onChange={this.handleChange}>
                        <BottomNavigationAction
                            label="Home" 
                            value="home"
                            icon={<HomeIcon />} 
                            // component={MaterialLink}
                            // href='/'
                        />
                        <BottomNavigationAction
                            label="Timer" 
                            value='timer'
                            icon={<TimerIcon />} 
                            // component={MaterialLink}
                            // href='/timer'
                        />
                        <BottomNavigationAction
                            label="Workouts" 
                            value='workout'
                            icon={<AddToPhotosIcon />}
                            // component={MaterialLink}
                            // href='/workout'
                        />
                    </BottomNavigation>
                </Box>
            </Paper>
        );
    }        
}
 
export default withRouter(NavBar);
