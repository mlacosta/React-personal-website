import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/landing/name';

let colorPalette = {
  text01:'#f6ecc8',
  text02: '#7fa1ce',
  text03: '#4d6e9b',
  background: '#050409',
  boxBackground: '060608',
  border: '#050409',
  white: '#ffff'
}

function App() {
  return (
    <div className="App">
      <Name colorPalette = {colorPalette}></Name>
    </div>
  );
}

export default App;
