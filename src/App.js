import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBox from './components/landing/mainBox/mainBox';

let colorPalette = {
  text01:'#f6ecc8',
  text02: '#7fa1ce',
  text03: '#4d6e9b',
  background: '#050409',
  boxBackground: '060608',
  border: '#27556c',
  white: '#ffff'
}

let style = {
  backgroundColor: colorPalette.background,
  height:'100vh',
}

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

function App() {
  return (
    <div className="App" style={style}>
      <MainBox colorPalette = {colorPalette} contact = {links}></MainBox>
    </div>
  );
}

export default App;
