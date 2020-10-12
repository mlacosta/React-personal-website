import React from 'react';
import Typist from 'react-typist';
import './name.css'

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
            color: colors.text02,
            fontWeight: '300'
        }

        return(
            <div className='Name' >
                <h1 id='myName' style={nameStyle}><Typist cursor={{show:false}}>{myName}</Typist></h1>
                <div id="profession">
                    <h2 style={titleStyle}>
                        <Typist cursor={{show:false}}>
                            <Typist.Delay ms={1300} />
                            {firstTitle}
                        </Typist >
                    </h2>
                    <h2 style={titleStyle}>
                        <Typist cursor={{show:false}}>
                            <Typist.Delay ms={2500} />
                            {secondTitle}
                        </Typist>
                    </h2>
                </div>
            </div>
        );
    }

}

export default Name;