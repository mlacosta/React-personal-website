import React from 'react';
import './Box.css'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

function Box ({ colors, select, highlight, onHover}){

    let border = colors.border;
    let icon = select.icon;
    let title = select.title;
    let description = select.description;
    let visor = select.visor;

    const boxStyle = {
        borderColor: border,
        backgroundColor: highlight ? colors.boxBackground:'inherit',
        color: highlight ? colors.text01:'inherit'
    }

    const titleStyle = {
        color: highlight ? colors.text01 : colors.text02
    }

    const descStyle = {
        color: highlight ? colors.text02 : colors.text02
    }

    return(
        <div className="Box" style = {boxStyle} onMouseOver = {onHover(title, visor)}>

            <div className="icon">{icon}</div>

            <div className="box-container">
                <p id='box-title' style={titleStyle}>
                    <Typist cursor={{hideWhenDone: true}}>{title}</Typist>
                </p>
                <p id='box-description' style={descStyle}>{description}</p>
            </div>

        </div>
    )

}

export default Box;