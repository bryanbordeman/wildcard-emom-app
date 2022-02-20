import React, { Component } from 'react';
import Page from '../components/Page'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {rounds: 1}

        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
    }

    add(event){
        event.preventDefault();
        const { name, value } = event.target;
        let newNum = Number(value) + 1
        this.setState({[name]: newNum})
    }

    subtract(event){
        event.preventDefault();
        const { name, value } = event.target;
        if (value > 1){
            let newNum = Number(value) - 1
            this.setState({[name]: newNum})
        }
    }
    
    render() { 
        const { rounds } = this.state

        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            boxShadow: 'none',
            color: theme.palette.text.secondary,
        }));

        return (
            <Page>
                <Button 
                    variant="outlined"
                    size="large"
                    component = {Link}
                    to={'/workout'}
                    >
                    Create Workout List
                </Button>

                <Item sx={{marginBottom: '20px'}}>
                    <Typography 
                        sx={{ fontWeight: 'bold', marginBottom: '0' }}
                        variant="h1" 
                        display="block" 
                        gutterBottom>
                        {rounds}
                    </Typography>
                    <Typography 
                        variant="caption" 
                        display="block" 
                        gutterBottom>
                        {rounds > 1? 'Rounds' : 'Round'}
                    </Typography>
                    <ButtonGroup size="large" aria-label="small outlined button group">
                        <Button 
                            onClick={this.add}
                            name='rounds'
                            value={rounds}
                        >+</Button>
                        {/* <Button disabled>{rounds}</Button> */}
                        <Button 
                            onClick={this.subtract}
                            name='rounds'
                            value={rounds}
                        >-</Button>
                    </ButtonGroup>
                </Item>
                <Button 
                    variant="contained"
                    size="large"
                    endIcon={<PlayArrowIcon />}
                    component = {Link}
                    to={'/timer'}
                    >
                    Start EMOM
                </Button>
            </Page>
        );
    }
}
 
export default Home;