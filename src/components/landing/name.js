import React from 'react';
import name from './name.css'

const myName = 'Mariano L. Acosta';
const firstTitle = 'Software Developer';
const secondTitle = 'Electronics Engineer';

class Name extends React.Component{

    render(){
        let colors = this.props.colorPalette;
        let nameStyle = {
            color: colors.text01
        }
        let titleStyle = {
            color: colors.text02
        }

        return(
            <div className = 'Name' >
                <h1 style={nameStyle} >{myName}</h1>
                <div className="profession">
                    <h2 style={titleStyle} >{firstTitle}</h2>
                    <h2 style={titleStyle} >{secondTitle}</h2>
                </div>
            </div>
        );
    }

}

export default Name;