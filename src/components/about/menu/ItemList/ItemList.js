import React from 'react';
import './ItemList.css'

function ItemList(props){
    return(
        <div class='itemlist-container'>
            <h4 style={{marginTop:0}}>{props.title}</h4>
            <p style={{marginBottom:'10px'}}>{props.description}</p>
            <ul id='list-menu'>
                {props.items.map((value)=>{return <li class='list-item'>{value}</li>})}
            </ul>
        </div>
    );
}

export default ItemList;