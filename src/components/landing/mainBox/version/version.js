import React from 'react';
import packageJson from '../../../../../package.json';
import './version.css';


function Version({colors,link}){
    
    let ver = packageJson["version"];
    let color = colors.text01;

    return(
        <span id="version" >
            <a href={link} style = {{color}} target='_blank'>{`Ver ${ver} built by Mariano L. Acosta`}</a>    
        </span>
    )
}


export default Version; 