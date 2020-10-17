import React from 'react';
import picture from './marian.jpg';
import './profilePic.css';


class ProfilePic extends React.Component{
    render(){

        return (<img id='profilePic' 
                    src ={picture} 
                    style ={this.props.style}>    
                </img>);
    }
}

export default ProfilePic;