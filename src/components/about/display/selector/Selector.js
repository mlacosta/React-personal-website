import React from 'react';
import './Selector.css';
import Box from './box/Box';
import selectors from './selectors'


class Selector extends React.Component{

    render(){

        const colors = this.props.colors;

        let styles = {
            borderColor: colors.border
        }

        let onHover =  this.props.onHover;

        return(
            <div className="Selector" style={styles}>
                {selectors.map(
                    select =>{
                        return(<Box colors = {colors}
                                    title = {select.title}
                                    description = {select.description}
                                    icon = {select.icon}
                                    visor  = {select.visor}
                                    onHover = {onHover}/>)
                    })
                }
            </div>
        )

    }

}

export default Selector;