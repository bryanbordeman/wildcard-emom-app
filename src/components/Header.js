import React, { Component } from 'react';
import logo from '../images/logo.png'
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        

    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%'
    },
}

class Header extends Component {
    
    render() { 
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <img className={classes.image} src={logo} alt="Logo" />
                <hr/>
            </div>
        );
    }
}
 
export default withStyles(styles)(Header);