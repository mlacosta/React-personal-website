import React from 'react';
import './Button01.css'

class Button01 extends React.Component{

    render(){
        let styles = {
            borderColor: this.props.colors.border,
            color: this.props.colors.text02
        }

        let style = this.props.style;

        return(
            <div className="container" style={style}>
                <a id='mybuton' style = {styles} 
                                href = {this.props.ref}> 
                    {this.props.msg} 
                </a>
            </div>

        )
    }
}

export default Button01;