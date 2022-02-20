import React, { Component } from 'react';
import Divider from '@mui/material/Divider';
import logo from '../images/logo.png'

class Header extends Component {
    render() { 
        const Logo = <img style={{position: 'sticky', 
                                top: '0', 
                                width: '200px',
                                }} src={logo} alt="Logo" />
        return (
            <div style={{textAlign: 'center', 
                        position:'fixed', 
                        top: '0', 
                        zIndex: '100', 
                        width: '100%', 
                        marginTop: '20px',
                        marginBottom: '20px'}}>
                {Logo}
                <Divider/>
            </div>
        );
    }
}

export default Header;