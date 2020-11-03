import React, {useEffect, useState}  from 'react'; 
import Name from './name/name';
import Contact from './contact/contact';
import Version from './version/version';
import DebugWindow from '../debug-window/debug-window';
import { navigate } from "@reach/router"


import './mainBox.css'
import ProfilePic from '../misc/profilePic/profilePic';

function MainBox ({ colors, contact, width, height}){
        
    let color = colors;
    let style = {
        border: `1px solid ${color.border}`,
        color: color.text02
    };

    let debug = {width, height, colors, name: colors.name};
    let name = {colors, width};
    let prop = {links:contact, colors, width};
    let version = {colors, link:'https://github.com/mlacosta/mlacosta.github.io'}

    const handlePressed = () => {
        const { href } = window.location;
        window.location.href = `${href}about`;
    };

    useEffect(()=>{window.addEventListener('keydown', handlePressed);},[])
    
    return(
        <div className="landing">
            <div className='MainBox' {...{style}}>
                <span id='cursor'>{'>'}</span>
                <DebugWindow {...debug}/>     
                <Name {...name}/>
                <Contact {...prop}/>
                <Version {...version}/>
            </div>
        </div>
    );
    
}

export default MainBox;