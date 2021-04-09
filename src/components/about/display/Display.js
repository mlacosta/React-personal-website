import React from 'react';
import './Display.css';
import './visor/Visor';
import Visor from './visor/Visor';
import Selector from './selector/Selector';
import selectors from '../display/selector/selectors';
import Version from '../../mainBox/version/version';
import Debug from '../../debug-window/debug-window';


class Display extends React.Component{

    constructor(props){
        super(props);

        let {title, description, menu} = selectors[0].visor;

        this.state = {
            selectors:selectors,
            currentBox: selectors[0].title,
            visor:{title, description, menu},
            boxes: selectors.map((value)=>{return value.title}),
        }

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(currentBox, visor){
        return ()=>{this.setState({currentBox, visor})}
    }

    render(){
        let { colors , width} = this.props;
        let style = {
            border: `1px solid ${colors.border}`,
            color: colors.text02,
            /*backgroundColor:'rgba(255,255,255,.015)',*/
            borderRadius:10
        }

        let {selectors, currentBox, visor} = this.state;
        let selector = {colors, selectors, currentBox};
        let visorProp = {colors, visor, width};

        let picSTyle = {
            position:'absolute',
            top:80,
            right:85,
            height:90,
            filter:'sepia(50)'
        }

        const debug ={
            position:'fixed',
            left:20,
            color:colors.text03
        }
        
        return(
            <div className="display" {...{style}}>
                <Selector onHover = {this.handleHover} {...selector}/>
                <Visor {...visorProp}/>
            </div>
        )
    }
}


export default Display;