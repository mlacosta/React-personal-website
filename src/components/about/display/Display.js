import React from 'react';
import './Display.css';
import './visor/Visor';
import Visor from './visor/Visor';
import Selector from './selector/Selector';

class Display extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visor:{
                title: 'Adipisicing veniam ex in dolore culpa enim ',
                description:'Do exercitation qui cillum irure ex qui. Anim pariatur.'+ 
                            'Commodo est tempor irure anim cillum ipsum consequat esse id deserunt qui excepteur.'+
                            ' Ipsum officia est occaecat veniam consequat laboris non ut nisi dolore Lorem Lorem fugiat adipisicing.'+
                            ' Eiusmod nostrud Lorem tempor exercitation ex aliquip non non veniam aliquip non tempor pariatur non.'+
                            ' Cillum duis dolor est Lorem fugiat amet sint reprehenderit.'
            }
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(title,description){
        return ()=>{
            this.setState({
                visor:{
                    title,
                    description
                }
            })
        }

    }

    render(){
        let style = {
            border: `1px solid ${this.props.colors.border}`,
            color: this.props.colors.text02
        };

        return(
            <div className="display" style = {style}>
                <Selector colors={this.props.colors} onHover={this.handleHover}/>
                <Visor 
                    colors={this.props.colors}
                    title = {this.state.visor.title}
                    description = {this.state.visor.description}
                />
            </div>
        )
    }
}

export default Display;