import React, { Component } from 'react';
import beep from '../audio/beep.mp3'
import finalBeep from '../audio/final-beep.mp3'
import Button from '@material-ui/core/Button';
import '../css/Timer.css'

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: this.props.time,
            rounds: this.props.totalRounds,
            round: 1,
            isRunning: false,
            isFinalCountdown: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.countDown = this.countDown.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    componentDidMount(){
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
                this.setState({time: this.props.time + 1})
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
            if(this.state.isFinalCountdown && this.state.time > 0){this.beep()}
            if(this.state.time === 0){this.finalBeep()}
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
        this.setState(
            {
                time: this.props.time,
                rounds: this.props.totalRounds,
                round: 1,
                isRunning: false,
                isFinalCountdown: false
            }
        )
    }
    render() { 
        const {isRunning, round, rounds, time, isFinalCountdown} = this.state;
        const {totalRounds} = this.props;
        let displayRounds = <span>{round > totalRounds? totalRounds : round}</span>
        let displayTimer = <span>{`${time}`.length > 1? time : `0${time}`}</span>
        return (
            <div className='Timer'>
                <h1>Round {displayRounds} of {totalRounds}</h1>
                <h1 style={{color: isFinalCountdown? 'red':''}}>{displayTimer}</h1>
                {/* <div><CircularProgress color={isFinalCountdown? "error":"primary"} variant="determinate" value={time * this.props.time}/></div> */}
                <Button variant="outlined" style={{display: isRunning? 'none':''}} onClick={this.startTimer}>Start</Button>
                <Button variant="outlined" style={{display: isRunning && rounds > 0? '':'none'}} onClick={this.stopTimer}>Pause</Button>
                <Button variant="outlined" onClick={this.resetTimer}>Reset</Button>
            </div>
        );
    }
}
 
export default Timer;