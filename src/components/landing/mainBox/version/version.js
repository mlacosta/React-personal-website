import React from 'react';
import packageJson from '../../../../../package.json';
import './version.css';


function Version({colorPalette,link}){
    
    let ver = packageJson["version"];
    let color = colorPalette.text01;

    return(
        <span id="version" >
            <a href={link} style = {{color}} target='_blank'>{`Ver ${ver} built by Mariano L. Acosta`}</a>    
        </span>
    )
}


export default Version; 