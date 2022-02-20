import React, { Component } from 'react';
import beep from '../audio/beep.mp3'
import finalBeep from '../audio/final-beep.mp3'
import '../css/Timer.css'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Typography from '@mui/material/Typography';
import { randomWorkout } from './randomWorkout'

const workoutList = JSON.parse(window.localStorage.getItem("workouts"));

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: this.props.time,
            rounds: JSON.parse(window.localStorage.getItem("rounds")),
            isRunning: false,
            isFinalCountdown: false,
            remainingTime : 0,
            timerColor: '#0071C4',
            workout: '',
            reps: ''
        }
        this.startTimer = this.startTimer.bind(this)
        this.countDown = this.countDown.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    componentDidMount(){
        clearInterval(this.timer)
        let newWorkout = randomWorkout(workoutList)
        this.setState({workout: newWorkout[0], reps: newWorkout.reps})
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    startTimer(){
        this.setState({isRunning: true})
        this.timer = setInterval(this.countDown, 1000);
    }
    
    beep(){
        // beeps at 3 seconds
        new Audio(beep).play()
    }
    finalBeep(){
        //beeps at 0 seconds
        new Audio(finalBeep).play()
    }
    countDown(){
        if (this.state.time === 0 && this.state.rounds > 0){
            let newRound = this.state.round + 1
            let newRounds = this.state.rounds - 1
            this.setState({rounds: newRounds, round: newRound})
            if (this.state.rounds > 0){
                let newWorkout = randomWorkout(workoutList)
                this.setState({time: this.props.time + 1, workout: newWorkout[0], reps: newWorkout.reps})
            }
            clearInterval(this.timer)
            this.setState({isFinalCountdown: false})
            this.startTimer()
        }
        if (this.state.time > 0 && this.state.rounds > 0){
            let newTime = this.state.time - 1;
            this.setState({time: newTime})
            if (this.state.time <= 3){
                this.setState({isFinalCountdown: true})
            }
            if(this.state.isFinalCountdown && this.state.time > 0){
                this.beep()
                this.setState({timerColor: "red" })
            }
            if(this.state.time === 0){
                this.finalBeep()
                this.setState({timerColor: "#0071C4" })
            }
        } else {
            clearInterval(this.timer)
        }
    }

    stopTimer(){
        clearInterval(this.timer)
        this.setState({isRunning: false})
    }

    resetTimer(){
        clearInterval(this.timer)
        let newWorkout = randomWorkout(workoutList)
        this.setState(
            {
                time: this.props.time,
                rounds: JSON.parse(window.localStorage.getItem("rounds")),
                isRunning: false,
                isFinalCountdown: false,
                timerColor: "#0071C4",
                workout: newWorkout[0],
                reps: newWorkout.reps
            }
        )
    }
    render() { 
        const {isRunning, rounds, time, workout, reps} = this.state;
        const {totalRounds} = this.props;
        let displayRounds = <span>{rounds > totalRounds? totalRounds : rounds}</span>
        let displayTimer = `${time}`.length > 1? time : `0${time}`
        
        return (
            <div>
                {/* <h1 style={{color: isFinalCountdown? 'red':''}}>{displayTimer}</h1> */}
                <div style={{ width: "15em" }} className='CircularProgressbar-wrapper'>
                <CircularProgressbar 
                    percentage={time} 
                    text={`${displayTimer}`} 
                    value={time} 
                    strokeWidth={12}
                    maxValue={this.props.time}
                    // minValue={0}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                    
                        // transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        // transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                    
                        // Text size
                        textSize: '100%',
                    
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                    
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                        
                        // Colors
                        pathColor: `${this.state.timerColor}`,
                        textColor: `${this.state.timerColor}`,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#0071C4',
                    })}
                    />
                </div>
                <Stack 
                    spacing={2} 
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="center"
                    >
                    <Stack
                        spacing={0} 
                        justifyContent="center">
                        <Typography variant="h6">
                            {displayRounds}
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                            Rounds
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={0} 
                        justifyContent="center">
                        <Typography variant="h6">
                            <span>{reps}</span>
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                            Reps
                        </Typography>
                    </Stack>
                </Stack>

                
                <Divider/>
                <div style={{width: '100%'}}>
                <Typography sx={{whiteSpace: 'pre-line',
                                overflow: 'hidden',
                                textOverflow: 'inherit',
                                fontSize: '2rem'}} m={2} variant="h3">
                    {workout}
                </Typography>
                </div>
                <Divider/>
                <Stack 
                    spacing={2} 
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="center"
                    >
                    {!isRunning && <IconButton 
                                        className='svg_icons'
                                        size="large" 
                                        color='primary' 
                                        onClick={this.startTimer}
                                        >
                                        <PlayCircleOutlineIcon fontSize="inherit"/>
                                    </IconButton>
                    }
                    {isRunning && rounds > 0 && <IconButton 
                                                    className='svg_icons'
                                                    size="large" 
                                                    color='primary' 
                                                    onClick={this.stopTimer}
                                                    >
                                                    <PauseCircleOutlineRoundedIcon fontSize="inherit"/>
                                                </IconButton>
                    }
                    <IconButton 
                        className='svg_icons'
                        color='primary' 
                        size="large" 
                        onClick={this.resetTimer}
                        >
                            <RestartAltIcon fontSize="inherit"/>
                    </IconButton>
                </Stack>
            </div>
        );
    }
}
 
export default Timer;