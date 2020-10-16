import React from 'react';
import './Display.css';

class Display extends React.Component{

    render(){
        let style = {
            border: `1px solid ${this.props.colors.border}`,
            color: this.props.colors.text02
        };

        return(
            <div className="display" style = {style}>

            </div>
        )
    }
}

export default Display;