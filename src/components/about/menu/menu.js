import React from 'react';
import List from './list/List';
import ItemList from './ItemList/ItemList';


class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let style = {
            display:'flex',
            justifyContent:'Space Around',
            marginTop:100
        }
        return(
            <div id ='menu-container' style = {style}>
                <List elements={this.props.elements}/>
                <ItemList items={this.props.items}/>
            </div>

        );
    }
}

export default Menu;