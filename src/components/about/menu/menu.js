import React, {Component} from 'react';
import List from './list/List';
import ItemList from './ItemList/ItemList';
import './menu.css'

let style = {
    display:'flex',
    justifyContent:'Space Around',
    marginTop:50
}

export default class Menu extends Component{

    constructor(props){
        super(props);
        let {content:items, 
             name:currentElement, 
             title, 
             description} = this.props.content[0];
        this.state = {
            elements: this.props.content.map((value)=>{return value.name}),
            items,
            currentElement,
            title,
            description
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let {content:items, 
             name:currentElement, 
             title, 
             description } = nextProps.content[0];
        this.state = {
            elements: nextProps.content.map((value)=>{return value.name}),
            items,
            currentElement,
            title,
            description
        }
    }

    handleSelect(name){
        return ()=>{
            let index  = this.props.content.findIndex((value)=>{return name === value.name});
            let {content:items, title, description} =  this.props.content[index];
            this.setState({
                elements: this.props.content.map((value)=>{return value.name}),
                currentElement:name,
                items,
                title,
                description
            });
        }
    }

    render(){
        let { items, title, description, currentElement ,elements} = this.state;
        let itemProps = {items, title, description}

        return(
            <div id ='menu-container' style = {style}>
                <List elements={elements} onClick={this.handleSelect} current={currentElement}/>
                <ItemList {...itemProps}/>
            </div>

        );
    }
}
