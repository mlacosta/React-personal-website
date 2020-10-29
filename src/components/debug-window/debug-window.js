import React from 'react';
import './debug-window.css';


function DebugWindow ( { width, height, name} ){

    return(
        <div className="DebugWindow">
            <span id='debug-title'>Debug mode</span><br/>
            x-coor: {width} <br/>
            y-coor: {height} <br/>
            theme: {name}
        </div>
    )

}

export default DebugWindow;