import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBox from './components/landing/mainBox/mainBox';
import themes from './themes/themes';

const links = [ { name:'Linkedin',
                  src: 'https://www.linkedin.com/in/mlacosta'
                },
                { name:'Github',
                  src: 'https://www.github.com/mlacosta'
                },
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
    return (
      <div className="App" >
        <MainBox colorPalette = {colorPalette} contact = {links}></MainBox>
      </div>
    );
  }

}

export default App;
