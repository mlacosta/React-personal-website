import React from 'react';
import './List.css';

export default function List(props){

    return(
        <div className="list-container">
            {props.elements.map((value)=>{
                    const back = props.colors.name === 'no end' ? props.colors.boxBackground : 'rgba(0,0,0,.2)';
                    let style = {
                        backgroundColor: props.current === value  ? back: '',
                        color: props.current === value  ? 'white': ''
                    }

                    let prop = {className:'list-element',style, onClick: props.onClick(value)}
                    
                    return(<div {...prop}>{value}</div>)
                })
            }
        </div>
    );
}
