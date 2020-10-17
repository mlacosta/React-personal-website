import React from 'react';
import ProfilePic from '../../../profilePic/profilePic';
import '../../../profilePic/profilePic';
import '../../../misc/Button01';
import Button01 from '../../../misc/Button01';
import './Visor.css';
import Display from '../Display';

class Visor extends React.Component{

    render(){

        const picStyle = {
            height:'150px',
        }

        const buttonStyle = {
            display:'flex',
            justifyContent:'center',
            backgroundColor:'#eee',
            marginTop:70
        }

        return(
            <div className="Visor">
                <div className="pic-container">
                    <ProfilePic style={picStyle} />
                </div>
                <h2 id='visor-title'>{this.props.title}</h2>
                <p id='visor-desc'>{this.props.description}</p>
                <Button01 colors={this.props.colors} 
                          msg='Generate CV'
                          style={buttonStyle}/>
            </div>
        );

    }
}

export default Visor;