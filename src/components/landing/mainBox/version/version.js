import React from 'react';
import packageJson from '../../../../../package.json';
import './version.css';


class Version extends React.Component{
    render(){
        let ver = packageJson["version"];
        let color = this.props.colorPalette.text01;
        return(
            <span id="version" >
                <a href="" style = {{color}}>{`Ver ${ver} built by Mariano L. Acosta`}</a>    
            </span>
        )
    }
}

export default Version; 