import React, { Component } from 'react';
import '../css/WorkoutForm.css'
import SelectWorkout from './SelectWorkout' 
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeleteIcon from '@mui/icons-material/Delete';


class WorkoutForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            workouts: [], 
            dense: false, 
            secondary: false}

        this.addWorkout = this.addWorkout.bind(this)
        this.deleteWorkout = this.deleteWorkout.bind(this)
    }

    addWorkout(workout){
        this.setState({
            workouts: [...this.state.workouts, workout]
        })
    }

    deleteWorkout(){
        console.log('Delete Workout')
    }

    render() { 
        const { workouts, dense, secondary  } = this.state
        const Demo = styled('div')(({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
          }));

        const workoutList = workouts.map(workout => (
            <ListItem key={workout[0]}
                secondaryAction={
                    <IconButton onClick={this.deleteWorkout} edge="end" aria-label="delete">
                    <DeleteIcon />
                    </IconButton>
                }
                >
                <ListItemAvatar>
                    <Avatar>
                    <FitnessCenterIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={workout[0]}
                    secondary={`Min: ${workout[1]} Max: ${workout[2]}`}
                />
            </ListItem>
        ))
        return (
            <div>
                <SelectWorkout 
                    addWorkout={this.addWorkout}
                />


                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Workout List
                    </Typography>
                    <Demo>
                        <List dense={dense}>
                            {workoutList}
                        </List>
                    </Demo>
                    </Grid>


            </div>
        );
    }
}

export default WorkoutForm;