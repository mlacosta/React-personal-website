import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainBox from './components/landing/mainBox/mainBox';
import Particles from 'react-particles-js';

import themes from './themes/themes';
import AtomBar from './components/animated/atom';

const links = [ { name:'Linkedin',
                  src: 'https://www.linkedin.com/in/mlacosta'
                },
                { name:'Github',
                  src: 'https://www.github.com/mlacosta'
                },
                {
                  name: 'Soundcloud',
                  src: 'https://www.soundcloud.com/mlacosta64'
                }
                ,
                { name:'Twitch',
                  src: 'https://www.twitch.tv/mariandevs'
                },
                { name:'Email',
                  src: 'mailto:marianoacosta.003@gmail.com'
                }
            ]

/*Set Background Color*/ 
let colorPalette = themes[0]; //choose a theme

const body = document.getElementsByTagName("BODY")[0];
body.setAttribute("style", `background-color: ${colorPalette.background}`);

/*   MAIN APP      */ 
            
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let pageStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
    return (
      <div className="App" >
        <Particles className="particles" />
        <div style={pageStyle} className="page" >
          <MainBox colorPalette = {colorPalette} contact = {links}></MainBox>
          <AtomBar/>
        </div>
      </div>
    );
  }

}

export default App;
