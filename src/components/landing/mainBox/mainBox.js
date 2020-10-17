import React from 'react';
import Name from './name/name';
import Contact from '../mainBox/contact/contact';
import Version from './version/version';
import ProfilePic from '../../profilePic/profilePic';
import DebugWindow from '../debug-window/debug-window';

import './mainBox.css'

class MainBox extends React.Component{

    render(){
        
        let color = this.props.colorPalette;
        let style = {
            border: `1px solid ${color.border}`,
            color: color.text02
        };

        let contact  = this.props.contact;

        return(
            <div className="landing">
                <div className='MainBox' style={style}>
                    <span id='cursor'>{'>'}</span>
                    <DebugWindow width = {this.props.width} height = {this.props.height} colors = {this.props.colorPalette} name = {this.props.colorPalette.name}/>     
                    <Name colorPalette = {this.props.colorPalette} width = {this.props.width}/>
                    <Contact links={contact} colorPalette = {this.props.colorPalette} width = {this.props.width}></Contact>
                    {/*<ProfilePic height='200px' top='340px' right = '290px'></ProfilePic>*/}
                    <Version colorPalette = {this.props.colorPalette} link={contact}/>
                </div>
            </div>


        );
    }
}


export default MainBox;