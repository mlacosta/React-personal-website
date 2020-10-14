import React from 'react';
import './debug-window.css';


class DebugWindow extends React.Component{

    render(){

        return(
            <div className="DebugWindow">
                <span id='debug-title'>Debug mode</span><br/>
                x-coor: {this.props.width} <br/>
                y-coor: {this.props.height} <br/>
                theme: {this.props.name}
            </div>
        )
    }

}

export default DebugWindow;