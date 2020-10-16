import React from 'react';
import './contact.css'


class Contact extends React.Component{
    render(){
        let style = {
            color: this.props.colorPalette.text03
        }
        return (

            <div className="Contact" >
                {this.props.links.map(link => 
                    <a href={link.src} target='_blank' style={style}>
                        { this.props.width >1036? link.name :link.icon }
                    </a> )
                }
            </div>
            
        )
    }
}

export default Contact;