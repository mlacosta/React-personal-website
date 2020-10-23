import React from 'react';
import './contact.css'


function Contact ({ links, colors, width}){

    let style = {
        color: colors.text03
    }

    return (
        <div className="Contact" >
            {links.map(link => 
                <a href={link.src} target='_blank' style={style}>
                    { width >1036? link.name :link.icon }
                </a> )
            }
        </div>
    )
}


export default Contact;