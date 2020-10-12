import React from 'react';
import Name from './name/name';
import Contact from '../mainBox/contact/contact';
import Version from './version/version';
import './mainBox.css'


class MainBox extends React.Component{

    render(){
        
        let color = this.props.colorPalette;
        let style = {
            border: `3px solid ${color.border}`,
            width: '80%',
            maxWidth: '1300px',
            height: '700px',
            margin: '100px auto',
            color: color.text02
        };

        let contact  = this.props.contact;

        return(
            <div className='MainBox' style={style}>
                <span id='cursor'>{'>'}</span>    
                <Name colorPalette = {this.props.colorPalette}/>
                <Contact links={contact} colorPalette = {this.props.colorPalette}></Contact>
                <Version colorPalette = {this.props.colorPalette} link={contact}/>
            </div>

        );
    }
}


export default MainBox;