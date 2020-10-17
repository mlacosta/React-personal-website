import React from 'react';
import picture from './marian.jpg';
import './profilePic.css';


class ProfilePic extends React.Component{
    render(){
        let style = {
            height: this.props.height,
        }
        return (<img id='profilePic' src ={picture} style={style}></img>);
    }
}

export default ProfilePic;