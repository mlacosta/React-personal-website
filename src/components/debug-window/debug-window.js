import React from 'react';
import './debug-window.css';
import useMousePosition from '../misc/UseMousePosition/UseMousePosition';


function DebugWindow ( { width, height, name, style= {}} ){
    const { x, y } = useMousePosition();
    return(
        <div className="DebugWindow" style = {style}>
            <span id='debug-title'>Debug mode</span><br/>
            width: {width} <br/>
            height: {height} <br/>
            x-axis: {x} <br/>
            y_axis: {y} <br/>
            theme: {name}
        </div>
    )

}

export default DebugWindow;