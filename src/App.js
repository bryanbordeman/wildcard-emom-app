import React, { Component } from 'react';
import './css/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';
import WildcardAppBar from './components/WildcardAppBar';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box'

const wildcardTheme = createTheme({
  palette: {
    primary: blue,
    secondary:
    {
      main: lightBlue[50],
    }
  },
});


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      windowDimension: null
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount(){
    this.handleResize()
  }

  componentDidUpdate(){
    window.addEventListener("resize", this.handleResize);
    return () => window.removeEventListener("resize", this.handleResize);
  
  }
  

  handleResize(){
    this.setState({windowDimension: window.innerWidth})
  }
  render() { 
    const isMobile = this.state.windowDimension <= 640;
    return (
      // <div className='App'>
        <ThemeProvider theme={wildcardTheme}>
            {!isMobile && <WildcardAppBar position="absolute" />}
            {isMobile && <NavBar/>}
        </ThemeProvider>
      // </div>
    );
  }
}
 
export default App;
