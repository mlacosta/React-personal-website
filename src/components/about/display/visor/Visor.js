import React from 'react';
import ProfilePic from '../../../profilePic/profilePic';
import '../../../profilePic/profilePic';
import '../../../misc/Button01';
import Button01 from '../../../misc/Button01';
import './Visor.css';

class Visor extends React.Component{

    render(){

        return(
            <div className="Visor">
                <ProfilePic
                    height='150px'
                />
                <h2 id='visor-title'>{this.props.title}</h2>
                <p id='visor-desc'>{this.props.description}</p>
                <Button01 colors={this.props.colors} msg='Generate CV'/>
            </div>
        );

    }
}

export default Visor;