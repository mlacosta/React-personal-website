import React from 'react';
import './Selector.css';
import Box from './box/Box';


let selectors  = [
    {
        title:'Pariatur anim voluptate',
        description:'Minim : Nulla',
        icon: <i class="fas fa-laptop-code"></i>
    },
    {
        title:'Pariatur anim voluptate',
        description:'Minim : Nulla',
        icon: <i class="fas fa-tools"></i>
    },
    {
        title:'Pariatur anim voluptate',
        description:'Minim : Nulla',
        icon: <i class="fas fa-laptop-code"></i>
    },
    {
        title:'Pariatur anim voluptate',
        description:'Minim : Nulla',
        icon: <i class="fas fa-laptop-code"></i>
    },
    {
        title:'Pariatur anim voluptate',
        description:'Minim : Nulla',
        icon: <i class="fas fa-laptop-code"></i>
    },

]

class Selector extends React.Component{

    render(){

        const colors = this.props.colors;

        let styles = {
            borderColor: colors.border
        }
        return(
            <div className="Selector" style={styles}>
                {selectors.map(
                    select =>{
                        return(<Box colors = {colors}
                                    title = {select.title}
                                    description = {select.description}
                                    icon = {select.icon}/>)
                    })
                }
            </div>
        )

    }

}

export default Selector;