import React from 'react';
import './Selector.css';
import Box from './box/Box';

class Selector extends React.Component{

    render(){
        let styles = {
            borderColor: this.props.colors.border
        }
        return(
            <div className="Selector" style={styles}>
                <Box colors = {this.props.colors}
                     title = {'Pariatur anim voluptate'}
                     description = {'Minim : Nulla'} 
                />
            </div>
        )

    }

}

export default Selector;