import React from 'react';
import './List.css'

function List(props){

    return(
        <div className="list-container">
            {props.elements.map((value)=>{return(<div class='list-element'>{value}</div>)})}
        </div>
    );
}

export default List;