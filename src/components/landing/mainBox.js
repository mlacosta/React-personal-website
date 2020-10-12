import React from 'react';
import Name from './name';
import './mainBox.css'

class MainBox extends React.Component{

    render(){
        
        let color = this.props.colorPalette;
        let style = {
            border: `5px solid ${color.border}`,
            width: '80%',
            maxWidth: '1120px',
            height: '700px',
            margin: '100px auto',
            color: color.text02
        };

        return(
            <div className='MainBox' style={style}>
                <span id='cursor'>{'>'}</span>    
                <Name colorPalette = {this.props.colorPalette}/>
            </div>

        );
    }
}


export default MainBox;