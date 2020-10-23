import React from 'react';
import './Selector.css';
import Box from './box/Box';


function Selector ({ colors , onHover , selectors, currentBox } ) {

    let styles = {
        borderColor: colors.border
    }

    return(
        <div className="Selector" style={styles}>
            {selectors.map(
                select =>{
                    return(<Box colors = {colors}
                                select = {select}
                                highlight = {(select.title === currentBox) ? true : false}
                                onHover = {onHover}/>)
                })
            }
        </div>
    )

}

export default Selector;