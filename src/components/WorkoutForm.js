import React, { Component } from 'react';
import '../css/WorkoutForm.css'
import workoutList from '../js/workoutList'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class WorkoutForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            min:0, 
            max:0, 
            movement:'', 
            category: Object.keys(workoutList)[0], 
            movementList: Object.values(workoutList)[0],
            categoryList: Object.keys(workoutList)}

        this.handleChange = this.handleChange.bind(this)
        this.addMin = this.addMin.bind(this)
        this.subtractMin = this.subtractMin.bind(this)
        this.addMax = this.addMax.bind(this)
        this.subtractMax = this.subtractMax.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleMovementChange = this.handleMovementChange.bind(this)
        
    }

    componentDidMount(){
        this.updateMovementMenu(this.state.category)
      
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState({ name: "", qty: "" });
      }
    handleChange(evt) {
        this.setState({
        [evt.target.name]: evt.target.value
        });
    }

    addMin(e){
        e.preventDefault(); 
        let newMin = this.state.min + 1
        this.setState({min: newMin})
    }
    subtractMin(e){
        e.preventDefault();
        if(this.state.min > 0){
        let newMin = this.state.min - 1
        this.setState({min: newMin})
        }
    }

    addMax(e){
        e.preventDefault(); 
        let newMax = this.state.max + 1
        this.setState({max: newMax})
    }
    subtractMax(e){
        e.preventDefault();
        if(this.state.max > 0){
        let newMax = this.state.max - 1
        this.setState({max: newMax})
        }
    }

    handleCategoryChange(e){
        this.updateMovementMenu(e.target.value)
        this.setState({ category: e.target.value });
    }
    updateMovementMenu(category){
        const list = workoutList[category]
        this.setState({ movementList: list })
    }
    handleMovementChange(e){
        this.setState({ movement: e.target.value})
    }
    
    render() { 
        const {min, max, movement, category, movementList} = this.state
        
        const categoryMenu = Object.keys(workoutList).map(category => (
            <MenuItem value={category}>{category}</MenuItem>
        ))
        const movementMenu = movementList.map(movements => (
            <MenuItem value={movements}>{movements}</MenuItem>
        ))

        // const movementList = workoutList[category].map(movements => (
        //     <MenuItem value={movements}>{movements}</MenuItem>
        // ))
        return (
            <form className='WorkoutForm'>
                <div>
                <h1>{movement}</h1>
                    <label htmlFor="category">Choose Workout Category: </label>
                    <Select value={ category } name='category' onChange={ this.handleCategoryChange }>
                        {categoryMenu}
                    </Select>

                    <label htmlFor="movement">Choose Workout Category: </label>

                    <Select value={ movement } name='movement' onChange={ this.handleMovementChange }>
                        {movementMenu}
                    </Select>
                    <button>Add</button>
                </div>
                <div className='WorkoutForm-min-max-container'>
                    <div className='WorkoutForm-min'>
                        <button onClick={this.addMin}>+</button>
                        <button onClick={this.subtractMin}>-</button>
                        <span>{`  ${min}`}</span>
                    </div>
                    <div className='WorkoutForm-max'>
                        <button onClick={this.addMax}>+</button>
                        <button onClick={this.subtractMax}>-</button>
                        <span>{`  ${max}`}</span>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default WorkoutForm;