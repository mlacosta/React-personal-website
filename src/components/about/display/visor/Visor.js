import React from 'react';
import Button01 from '../../../misc/button01/Button01';
import './Visor.css';
import 'react-typist/dist/Typist.css';
import Menu from '../../menu/menu';
import CV from '../../../../documents/CV_Mariano_L_Acosta.pdf';

let buttonStyle = {}

export default function Visor({colors, visor, width}) {

    const titleStyle = {color: colors.text01}
    const descStyle = {color: colors.text02}

    let { title, description, menu } = visor;
    let hasMenu = menu.isValid;
    let renderP = <p id='visor-desc' style={descStyle}>{description}</p>
    let render = hasMenu ? < Menu content = {menu.content} {...{colors}}/> : renderP;

    if ((width < 1350) && (width>1058)){
        buttonStyle = {
            position:'absolute',
            display:'flex',
            justifyContent:'center',
            backgroundColor:'#eee',
            marginTop:70,
            bottom:80,
            left:-450
        }
    }else if(width < 753){
        buttonStyle = {position:'absolute',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#eee',
        marginTop:70,
        bottom:20,
        left:180
    }

    }else{
        buttonStyle = {position:'absolute',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#eee',
        marginTop:70,
        bottom:100,
        left:0}
    }

    return(
        <div className="Visor">
            <h2 id='visor-title' style={titleStyle}>{title}</h2>
            {render}
            <Button01 {...{colors}} msg={width>1058 ? 'Generate CV' :'CV'} style={buttonStyle} source={CV}/>
        </div>
    );

}

