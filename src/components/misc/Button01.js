import React from 'react';
import './Button01.css'

class Button01 extends React.Component{

    render(){
        let styles = {
            borderColor: this.props.colors.border,
            color: this.props.colors.text02
        }
        return(
            <a id='mybuton' style = {styles} href = {this.props.ref}> {this.props.msg} </a>
        )
    }
}

export default Button01;