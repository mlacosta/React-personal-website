import React from 'react';
import ProfilePic from '../../../profilePic/profilePic';
import '../../../profilePic/profilePic';
import Button01 from '../../../misc/button01/Button01';
import './Visor.css';
import Display from '../Display';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

class Visor extends React.Component{

    render(){

        const picStyle = {
            display:'none',
            height:'120px',
            position: 'absolute',
            right: 20,
            top: -20
        }

        const buttonStyle = {
            position:'absolute',
            display:'flex',
            justifyContent:'center',
            backgroundColor:'#eee',
            marginTop:70,
            bottom:80,
        }

        const titleStyle = {
            color: this.props.colors.text01
        }

        const descStyle = {
            color: this.props.colors.text02
        }

        return(
            <div className="Visor">
                <div className="pic-container">
                    <ProfilePic style={picStyle} />
                </div>
                <h2 id='visor-title' style={titleStyle}>{this.props.title}</h2>
                <p id='visor-desc' style={descStyle}>{this.props.description}</p>
                <Button01 colors={this.props.colors} 
                          msg='Generate CV'
                          style={buttonStyle}/>
            </div>
        );

    }
}

export default Visor;