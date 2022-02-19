import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'



class WildcardAppBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchorElNav: null,
        }
        this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
        this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
    }

    handleOpenNavMenu(event){
        this.setState({anchorElNav: event.currentTarget})
    }

    handleCloseNavMenu(){
        this.setState({anchorElNav: null})
    }
    render() { 
        const { anchorElNav } = this.state
        const pages = ['Home', 'Timer', 'Workouts'];
        const paths = ['/', '/timer', '/workout'];
        const Logo = <img className="App-logo" src={logo} alt="Logo" />
        return (
            <div>
                <AppBar 
                    color="secondary"
                    >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            {Logo}
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={this.handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page, key) => (
                                <MenuItem 
                                    key={page} 
                                    onClick={this.handleCloseNavMenu}
                                    component={ Link }
                                    to={paths[key]}>
                                    <Typography 
                                        textAlign="center"
                                        >{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            {Logo}
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, key) => (
                            <Button
                                key={page}
                                onClick={this.handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                component={ Link }
                                to={paths[key]}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                        </Toolbar>
                    </Container>
                    </AppBar>

            </div>
        );
    }
}
 
export default WildcardAppBar;