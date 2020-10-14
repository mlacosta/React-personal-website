import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainBox from './components/landing/mainBox/mainBox';
import Particles from 'react-particles-js';
import themes from './themes/themes';
import AtomBar from './components/animated/atom';

import links from './links';

/*Set Background Color*/ 


/*   MAIN APP      */ 
            
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {width: window.innerWidth, height: window.innerWidth, colorPalette:themes[Math.floor(Math.random() * Math.floor(6))]};
    this.handleResize = this.handleResize.bind(this);
    
  }

  handleResize(){
    this.setState({width: window.innerWidth, height: window.innerHeight });
    let index = Math.floor(Math.random() * Math.floor(6));
    this.setState({colorPalette:themes[index]});
  }

  render(){
    let pageStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }

    const body = document.getElementsByTagName("BODY")[0];
    body.setAttribute("style", `background-color: ${this.state.colorPalette.background}`);

    window.addEventListener('resize', this.handleResize);

    return (
      <div className="App" >
        <Particles className="particles" width={this.state.width} height = {this.state.height} style={{position:'fixed'}}/>
        <div style={pageStyle} className="page" >
          <MainBox colorPalette = {this.state.colorPalette} contact = {links} width = {this.state.width} height = {this.state.height}></MainBox>
          <AtomBar/>
        </div>
      </div>
    );
  }

}

export default App;
