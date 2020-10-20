import React from 'react';
import './contact.css'


function Contact (props){
    let style = {
        color: props.colorPalette.text03
    }
    return (

        <div className="Contact" >
            {props.links.map(link => 
                <a href={link.src} target='_blank' style={style}>
                    { props.width >1036? link.name :link.icon }
                </a> )
            }
        </div>
        
    )
}


export default Contact;