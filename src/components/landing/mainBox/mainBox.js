import React from 'react';
import Name from './name/name';
import Contact from './contact/contact';
import Version from './version/version';
import DebugWindow from '../../debug-window/debug-window';

import './mainBox.css'


function MainBox ({ colors, contact, width, height}){
        
    let color = colors;
    let style = {
        border: `1px solid ${color.border}`,
        color: color.text02
    };

    return(
        <div className="landing">
            <div className='MainBox' style={style}>
                <span id='cursor'>{'>'}</span>
                <DebugWindow width = {width} height = {height} colors = {colors} name = {colors.name}/>     
                <Name colors = {colors} width = {width}/>
                <Contact links={contact} colors = {colors} width = {width}></Contact>
                <Version colors = {colors} link={'https://github.com/mlacosta/mlacosta.github.io'}/>
            </div>
        </div>
    );
    
}

export default MainBox;