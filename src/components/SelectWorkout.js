import React, { Component } from 'react';
import workoutList from '../js/workoutList'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class SelectWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            category: Object.keys(workoutList)[0],
            movement: '',
            movementList: Object.values(workoutList)[0],
            categoryList: Object.keys(workoutList),
            min:0, 
            max:0
        }

        this.handleChange = this.handleChange.bind(this)
        this.updateMovementMenu = this.updateMovementMenu.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
    }
    componentDidMount(){
        this.updateMovementMenu(this.state.category)
    }

    handleChange(event){
        const { name, value } = event.target;
        if( name === 'category') {
            this.updateMovementMenu(value)
        }
        
        this.setState({[name]: value})
        
    }

    updateMovementMenu(category){
        const list = workoutList[category]
        this.setState({ movementList: list, movement: '' })
    }

    add(event){
        event.preventDefault();
        const { name, value } = event.target;
        let newNum = Number(value) + 1
        console.log(name, value)
        this.setState({[name]: newNum})
        
    }

    subtract(event){
        event.preventDefault();
        const { name, value } = event.target;
        let newNum = Number(value) - 1
        console.log(name, value)
        this.setState({[name]: newNum})
        
    }

    handleClickOpen = () => {
        this.setState({open: true})
    };
    
    handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            this.setState({open: false})
        }
    };


    render() { 
        const { movementList, categoryList, open, category, movement, max, min } = this.state
        const categoryMenu = categoryList.map(category => (
            <MenuItem value={category} key={category}>{category}</MenuItem>
        ));
        const movementMenu = movementList.map(movements => (
            <MenuItem value={movements}>{movements}</MenuItem>
        ));
        return (
        <div>
            <Button onClick={this.handleClickOpen}>Select Workout</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={this.handleClose}>
                <DialogTitle>Select Workout</DialogTitle>
                <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120}}>
                    <InputLabel htmlFor="category-label">Category</InputLabel>
                    <Select
                        // native
                        labelId="category-label"
                        name='category'
                        value={category}
                        onChange={this.handleChange}
                        input={<OutlinedInput label="Category" id="demo-dialog-native" />}
                    >
                        {categoryMenu}
                    </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120}}>
                    <InputLabel htmlFor="movement-label">Movement</InputLabel>
                    <Select
                        // native
                        labelId="movement-label"
                        name='movement'
                        value={movement}
                        onChange={this.handleChange}
                        input={<OutlinedInput label="Movement" id="demo-dialog-native" />}
                    >
                        {movementMenu}
                    </Select>
                    </FormControl>
                </Box>
                <div className='WorkoutForm-min-max-container'>
                    <div className='WorkoutForm-min'>
                        <button 
                            onClick={this.add} 
                            name='min'
                            value={min}
                            >+</button>
                        <button 
                            onClick={this.subtract} 
                            name='min'
                            value={min}
                            >-</button>
                        <span>{`  ${min}`}</span>
                    </div>
                    <div className='WorkoutForm-max'>
                        <button 
                            onClick={this.add} 
                            name='max'
                            value={max}
                            >+</button>
                        <button 
                            onClick={this.subtract} 
                            name='max'
                            value={max}
                            >-</button>
                        <span>{`  ${max}`}</span>
                    </div>
                </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose}>Cancel</Button>
                <Button onClick={this.handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>);
    }
}

export default SelectWorkout;