import React from 'react';
import ProfilePic from '../../../profilePic/profilePic';
import '../../../profilePic/profilePic';
import Button01 from '../../../misc/button01/Button01';
import './Visor.css';
import 'react-typist/dist/Typist.css';
import Menu from '../../menu/menu';

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

function Visor(props) {

    const titleStyle = {
        color: props.colors.text01
    }

    const descStyle = {
        color: props.colors.text02
    }

    let { title, description, menu } = props.visor;

    let hasMenu = menu.isValid;
    let renderP = <p id='visor-desc' style={descStyle}>{description}</p>
    let render = hasMenu ? < Menu content = {menu.content}/> : renderP;

    return(
        <div className="Visor">
            <div className="pic-container">
                <ProfilePic style={picStyle} />
            </div>
            <h2 id='visor-title' style={titleStyle}>{title}</h2>
            {render}
            <Button01 colors={props.colors} msg='Generate CV'style={buttonStyle}/>
        </div>
    );

}

export default Visor;