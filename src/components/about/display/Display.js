import React from 'react';
import './Display.css';
import './visor/Visor';
import Visor from './visor/Visor';

class Display extends React.Component{

    render(){
        let style = {
            border: `1px solid ${this.props.colors.border}`,
            color: this.props.colors.text02
        };

        return(
            <div className="display" style = {style}>
                <Visor 
                    colors={this.props.colors}
                    title = {'Adipisicing veniam ex in dolore culpa enim '}
                    description = {"Do exercitation qui cillum irure ex qui. Anim pariatur. Commodo est tempor irure anim cillum ipsum consequat esse id deserunt qui excepteur. Ipsum officia est occaecat veniam consequat laboris non ut nisi dolore Lorem Lorem fugiat adipisicing. Eiusmod nostrud Lorem tempor exercitation ex aliquip non non veniam aliquip non tempor pariatur non. Cillum duis dolor est Lorem fugiat amet sint reprehenderit."}
                />
            </div>
        )
    }
}

export default Display;