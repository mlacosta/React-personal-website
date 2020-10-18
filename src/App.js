import React from 'react';
import './App.css';

import MainBox from './components/landing/mainBox/mainBox';
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
    let index = Math.floor(Math.random() * Math.floor(5));
    //index = 5; //debug purposes
    this.state = {width: window.innerWidth, height: window.innerHeight, colorPalette:themes[index]};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(){
    this.setState({width: window.innerWidth, height: window.innerHeight });
    let index = Math.floor(Math.random() * Math.floor(5));
    //index = 5; //debug purposes
    this.setState({colorPalette:themes[index]});
  }

  render(){


    const body = document.getElementsByTagName("BODY")[0];
    body.setAttribute("style", `background-color: ${this.state.colorPalette.background}`);

    window.addEventListener('resize', this.handleResize);

    return (
      <div className="App" >
        <Particles 
          className="particles" 
          width = {this.state.width} 
          height = {this.state.height} 
          style = {{position:'fixed'}}
          params = {(this.state.colorPalette.name === 'no end') ? {
            particles:{
              color: {
                value: this.state.colorPalette.text02
              },
              "line_linked": {
                color:this.state.colorPalette.text02
              }
            }
           } : {
              //add another option if you want
           }
          }
        />
        <PageContainer>
          <MainBox 
            colorPalette = {this.state.colorPalette} 
            contact = {links} 
            width = {this.state.width} 
            height = {this.state.height}></MainBox>
          <AtomBar/>
          <Display colors = {this.state.colorPalette}/>
        </PageContainer>


      </div>
    );
  }

}

export default App;
