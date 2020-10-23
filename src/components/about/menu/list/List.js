import React from 'react';
import './List.css'

export default function List(props){

    return(
        <div className="list-container">
            {props.elements.map((value)=>{

                    let style = {
                        backgroundColor: props.current === value  ? 'rgba(0,0,0,.2)': '',
                        color: props.current === value  ? 'white': ''
                    }

                    let prop = {className:'list-element',style, onClick: props.onClick(value)}
                    
                    return(<div {...prop}>{value}</div>)
                })
            }
        </div>
    );
}
