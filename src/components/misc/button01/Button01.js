import React from 'react';
import './Button01.css';


export default function Button01(props) {

        let styles = {
            borderColor: props.colors.border,
            color: props.colors.text02
        }

        let style = props.style;

        return(
            <div className="container" style={style}>
                <a id='mybuton' style = {styles} 
                                href = {props.source}
                                target = '_blank'> 
                    {props.msg} 
                </a>
            </div>

        )

}

