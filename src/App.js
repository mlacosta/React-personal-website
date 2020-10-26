import React from 'react';
import './App.css';

import MainBox from './components/mainBox/mainBox';
import Particles from 'react-particles-js';
import themes from './themes/themes';
import AtomBar from './components/animated/atom';
import Display from './components/about/display/Display';
import PageContainer from './components/misc/pageContainer/PageContainer';
import Change from './components/misc/Change/Change';

import links from './links';

/*   MAIN APP      */ 
            
class App extends React.Component {

  constructor(props){
    super(props);
    let index = Math.floor(Math.random() * Math.floor(3));
    //index = 5; //debug purposes
    this.state = {width: window.innerWidth, height: window.innerHeight, colors:themes[index],theme:index};
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleChangeTheme(){
    const len = themes.length;
    let index = this.state.theme;
    let nuIndex = index === (len - 1) ? 0 : index + 1;
    this.setState({theme:nuIndex});
    this.setState({colors:themes[this.state.theme]});
  }

  handleResize(){
    this.setState({width: window.innerWidth, height: window.innerHeight });

  }

  render(){
    const body = document.getElementsByTagName("BODY")[0];
    body.setAttribute("style", `background-color: ${this.state.colors.background}`);
    window.addEventListener('resize', this.handleResize);
    
    let isTheme = ((this.state.colors.name === 'no end') || (this.state.colors.name === 'indo silver club'));
    const particleStyle = isTheme && {particles:{color: {value: '#20a9b1'},"line_linked": {color:'#20a9b1'}}}; 

    let changeProp = {msg:'Change Theme',onClick:this.handleChangeTheme}

    return (
      <div className="App" >
        <Particles className="particles" 
          width = {this.state.width} 
          height = {this.state.height} 
          style = {{position:'fixed'}}
          params = {particleStyle}/>
        <PageContainer>
          <Change colors = {this.state.colors} {...changeProp}/>
          <MainBox {...this.state} contact = {links}/> 
          <AtomBar/>
          <Display colors = {this.state.colors}/>
        </PageContainer>
      </div>
    );
  }

}

export default App;
