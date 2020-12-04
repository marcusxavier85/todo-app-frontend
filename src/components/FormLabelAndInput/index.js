import React, {Component} from 'react';

export class LabelAndInput extends Component {

    render() {
        return(
            <div>
                <label> {this.props.name} </label>
                <input type={this.props.type}></input>
            </div>
        )
    }
}
