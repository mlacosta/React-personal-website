import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBox from './components/landing/mainBox';

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
  height:'100vh'
}

function App() {
  return (
    <div className="App" style={style}>
      <MainBox colorPalette = {colorPalette} ></MainBox>
    </div>
  );
}

export default App;
