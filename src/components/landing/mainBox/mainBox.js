import React from 'react';
import Name from './name/name';
import Contact from '../mainBox/contact/contact';
import Version from './version/version';
import ProfilePic from '../../profilePic/profilePic';
import './mainBox.css'
import AtomBar from '../../animated/atom';


class MainBox extends React.Component{

    render(){
        
        let color = this.props.colorPalette;
        let style = {
            border: `1px solid ${color.border}`,
            color: color.text02
        };

        let contact  = this.props.contact;

        return(
            <div className='MainBox' style={style}>
                <span id='cursor'>{'>'}</span>    
                <Name colorPalette = {this.props.colorPalette}/>
                <Contact links={contact} colorPalette = {this.props.colorPalette}></Contact>
                {/*<ProfilePic height='200px' top='340px' right = '290px'></ProfilePic>*/}
                <Version colorPalette = {this.props.colorPalette} link={contact}/>
            </div>

        );
    }
}


export default MainBox;