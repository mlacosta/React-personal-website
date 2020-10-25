import React from 'react';
import './ItemList.css'

function ItemList(props){
    
    let colors = props.colors;
    let text = colors.name === 'indo silver club' ? colors.text01 : colors.text02;
    let style = {color:text}

    return(
        <div class='itemlist-container' {...{style}}>
            <h4 style={{marginTop:0}}>{props.title}</h4>
            <p style={{marginBottom:'10px'}}>{props.description}</p>
            <ul id='list-menu'>
                {props.items.map((value)=>{return <li class='list-item'>{value}</li>})}
            </ul>
        </div>
    );
}

export default ItemList;