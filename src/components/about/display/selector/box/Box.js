import React from 'react';


class Box extends React.Component{

    render(){

        let border = this.props.colors.border;
        let icon = this.props.icon;
        let title = this.props.title;
        let description = this.props.description;

        const boxStyle = {
            borderColor: border
        }

        const titleStyle = {
            color: this.props.colors.text01
        }

        const descStyle = {
            color: this.props.colors.text02
        }

        return(
            <div className="Box">
                <div className="icon"></div>
                <p id='box-title'></p>
                <p id='box-description'></p>
            </div>
        )

    }

}

export default Box;