import React from 'react';
import List from './list/List';
import ItemList from './ItemList/ItemList';


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elements: this.props.content.map((value)=>{return value.name}),
            items:this.props.content[0].content,
            currentElement:this.props.content[0].name,
            title: this.props.content[0].title ,
            description: this.props.content[0].description ,
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(name){
        return ()=>{
            let index  = this.props.content.findIndex((value)=>{return name === value.name});
            this.setState({
                currentElement:name,
                items:this.props.content[index].content,
                title:this.props.content[index].title,
                description:this.props.content[index].description,
            });
        }

    }

    render(){
        let style = {
            display:'flex',
            justifyContent:'Space Around',
            marginTop:100
        }
        return(
            <div id ='menu-container' style = {style}>
                <List elements={this.state.elements} 
                      onClick={this.handleSelect}
                      current={this.state.currentElement}/>
                <ItemList items={this.state.items} title={this.state.title} description={this.state.description}/>
            </div>

        );
    }
}

export default Menu;