import React from 'react';
import './Display.css';
import './visor/Visor';
import Visor from './visor/Visor';
import Selector from './selector/Selector';
import ProfilePic from '../../profilePic/profilePic';
import selectors from '../display/selector/selectors'

class Display extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentBox: selectors[0].title,
            visor:{
                title: selectors[0].visor.title,
                description:selectors[0].visor.description,
                menu:selectors[0].visor.menu
            },
            boxes: selectors.map((value)=>{return value.title}),
            
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(boxTitle,title,description,menu){
        return ()=>{
            this.setState({
                currentBox: boxTitle,
                visor:{
                    title,
                    description,
                    menu
                }
            })
        }
    }

    render(){
        let style = {
            border: `1px solid ${this.props.colors.border}`,
            color: this.props.colors.text02
        };

        const picStyle = {
            height:'90px',
            position: 'absolute',
            margin:'10px 0 0 30px',
            display:'none'
        }

        return(
            <div className="display" style = {style}>
                <ProfilePic style={picStyle} layerColor = {this.props.colors.background}/> 
                <Selector colors={this.props.colors} 
                          onHover={this.handleHover}
                          currentBox={this.state.currentBox}/>
                <Visor 
                    colors={this.props.colors}
                    title = {this.state.visor.title}
                    description = {this.state.visor.description}
                    menu = {this.state.visor.menu}
                />
            </div>
        )
    }
}

export default Display;