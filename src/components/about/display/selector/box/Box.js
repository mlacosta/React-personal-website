import React from 'react';
import './Box.css'

class Box extends React.Component{

    render(){

        let border = this.props.colors.border;
        let icon = this.props.icon;
        //let title = this.props.title;
        //let description = this.props.description;

        const boxStyle = {
            borderColor: border
        }

        const titleStyle = {
            color: this.props.colors.text01
        }

        const descStyle = {
            color: this.props.colors.text02
        }

        return(
            <div className="Box" style = {boxStyle} >
                {<div className="icon">{icon}</div>}
                <p id='box-title'></p>
                <p id='box-description'></p>
            </div>
        )

    }

}

export default Box;