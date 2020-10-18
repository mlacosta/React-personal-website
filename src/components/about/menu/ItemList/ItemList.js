import React from 'react';
import './ItemList.css'

function ItemList(props){
    return(
        <ul id='list-menu'>
            {props.items.map((value)=>{return <li>{value}</li>})}
        </ul>
    );
}

export default ItemList;