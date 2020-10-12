import React from 'react';
import picture from './marian.jpg';
import './profilePic.css';


class ProfilePic extends React.Component{
    render(){
        let style = {
            height: this.props.height,
            top: this.props.top,
            right: this.props.right
        }
        return (<img id='profilePic' src ={picture} style={style}></img>);
    }
}

export default ProfilePic;