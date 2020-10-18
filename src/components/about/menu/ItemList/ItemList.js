import React from 'react';
import './ItemList.css'

function ItemList(props){
    return(
        <ul id='list-menu'>
            {props.items.map((value)=>{return <li class='list-item'>{value}</li>})}
        </ul>
    );
}

export default ItemList;