import React from 'react';
import picture from './marian.jpg';
import './profilePic.css';


function ProfilePic({style}){

    return (<img id='profilePic' class = 'pic'
                    src ={picture} 
                    style ={style}>    
            </img>);
}


export default ProfilePic;