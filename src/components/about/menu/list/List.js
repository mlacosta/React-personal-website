import React from 'react';
import './List.css'

function List(props){



    return(
        <div className="list-container">
            {props.elements.map((value)=>{
                    let style = {
                        backgroundColor: props.current === value  ? 'rgba(0,0,0,.2)': '',
                        color: props.current === value  ? 'white': ''
                    }
                    return(
                            <div className ='list-element' 
                                 style = {style}
                                 onClick = {props.onClick(value)}>
                                {value}
                            </div>
                          )
                    })
            }
        </div>
    );
}

export default List;