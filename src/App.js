import React from 'react';
import './App.css';

import MainBox from './components/mainBox/mainBox';
import Particles from 'react-particles-js';
import themes from './themes/themes';
import AtomBar from './components/animated/atom';
import Display from './components/about/display/Display';
import PageContainer from './components/misc/pageContainer/PageContainer'

import links from './links';

/*   MAIN APP      */ 
            
class App extends React.Component {

  constructor(props){
    super(props);
    let index = Math.floor(Math.random() * Math.floor(3));
    //index = 5; //debug purposes
    this.state = {width: window.innerWidth, height: window.innerHeight, colors:themes[index]};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(){
    this.setState({width: window.innerWidth, height: window.innerHeight });
    let index = Math.floor(Math.random() * Math.floor(3));
    //index = 5; //debug purposes
    this.setState({colors:themes[index]});
  }

  render(){

    const body = document.getElementsByTagName("BODY")[0];
    body.setAttribute("style", `background-color: ${this.state.colors.background}`);
    window.addEventListener('resize', this.handleResize);
    
    let isTheme = ((this.state.colors.name === 'no end') || (this.state.colors.name === 'indo silver club'));
    const particleStyle = isTheme && {particles:{color: {value: '#20a9b1'},"line_linked": {color:'#20a9b1'}}}; 
    
    return (
      <div className="App" >
        <Particles className="particles" 
          width = {this.state.width} 
          height = {this.state.height} 
          style = {{position:'fixed'}}
          params = {particleStyle}/>
        <PageContainer>
          <MainBox {...this.state} contact = {links}/> 
          <AtomBar/>
          <Display colors = {this.state.colors}/>
        </PageContainer>
      </div>
    );
  }

}

export default App;
