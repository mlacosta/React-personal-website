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
                        { this.props.width >932? link.name : <img id='icon'src={link.icon} style = {{color:'#a0f'}}></img> }
                    </a> )
                }
            </div>
            
        )
    }
}

export default Contact;