import React from 'react';
import Typist from 'react-typist';
import './name.css'





class Name extends React.Component{

    render(){
        const myName =  this.props.width > 700 ? 'Mariano L. Acosta' : 'Mariano Acosta' ;
        const firstTitle = 'Software Developer';
        const secondTitle = 'Electronics Engineer';
        
        let colors = this.props.colorPalette;
        let nameStyle = {
            color: colors.text01
        }
        let titleStyle = {
            color: colors.text02,
            fontWeight: '300'
        }

        let delay1 = 1000;
        let delay2 = 1500 + delay1;
        let delay3= delay2 + 1500;

        return(
            <div className='Name' >   
                    <h1 id='myName' style={nameStyle}>
                        <Typist>
                            <Typist.Delay ms={delay1} />
                            {myName}
                        </Typist>
                    </h1>
                    <div id="profession">
                        <h2 style={titleStyle}>
                            <Typist>
                                <Typist.Delay ms={delay2} />
                                {firstTitle}
                            </Typist>
                        </h2>
                        <h2 style={titleStyle}>
                            <Typist>
                                <Typist.Delay ms={delay3} />
                                {secondTitle}
                            </Typist>
                        </h2>
                    </div>
            </div>
        );
    }

}

export default Name;