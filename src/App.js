import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainBox from './components/landing/mainBox/mainBox';
import Particles from 'react-particles-js';
import themes from './themes/themes';
import AtomBar from './components/animated/atom';

import links from './links';

/*Set Background Color*/ 
let colorPalette = themes[0]; //choose a theme

const body = document.getElementsByTagName("BODY")[0];
body.setAttribute("style", `background-color: ${colorPalette.background}`);

/*   MAIN APP      */ 
            
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {width: window.innerWidth};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(){
    this.setState({width: window.innerWidth});
  }

  render(){
    let pageStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }

    window.addEventListener('resize', this.handleResize);

    return (
      <div className="App" >
        <Particles className="particles" />
        <div style={pageStyle} className="page" >
          <MainBox colorPalette = {colorPalette} contact = {links} width = {this.state.width}></MainBox>
          <AtomBar/>
        </div>
      </div>
    );
  }

}

export default App;
