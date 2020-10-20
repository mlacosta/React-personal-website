import React from 'react';
import Name from './name/name';
import Contact from '../mainBox/contact/contact';
import Version from './version/version';
import DebugWindow from '../debug-window/debug-window';

import './mainBox.css'


function MainBox ({colorPalette,contact,width,height}){
        
    let color = colorPalette;
    let style = {
        border: `1px solid ${color.border}`,
        color: color.text02
    };

    return(
        <div className="landing">
            <div className='MainBox' style={style}>
                <span id='cursor'>{'>'}</span>
                <DebugWindow width = {width} height = {height} colors = {colorPalette} name = {colorPalette.name}/>     
                <Name colorPalette = {colorPalette} width = {width}/>
                <Contact links={contact} colorPalette = {colorPalette} width = {width}></Contact>
                <Version colorPalette = {colorPalette} link={'https://github.com/mlacosta/mlacosta.github.io'}/>
            </div>
        </div>
    );
    
}

export default MainBox;