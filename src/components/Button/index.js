import React, {Component} from 'react';

export class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []}
    }

    render() {
        return (
            <button onClick={this.props.click} data-taskId={this.props.taskId}>{this.props.name}</button>
        )
    }
}