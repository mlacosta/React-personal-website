import React from 'react';
import './Selector.css';
import Box from './box/Box';


function Selector ({ colors , onHover , selectors, currentBox } ) {

    let styles = {borderColor: colors.border}

    return(
        <div className="Selector" style={styles}>
            {selectors.map(
                select =>{
                    let highlight = (select.title === currentBox) ? true : false; 
                    let prop = {colors,onHover,select, highlight};
                    return(<Box {...prop}/>)
                })
            }
        </div>
    )

}

export default Selector;