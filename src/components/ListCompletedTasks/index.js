import React, {Component} from 'react';
import {Button} from "../Button";
import {Header} from "../Header";

export class CompletedTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.getCompletedTasks();
    }

    getCompletedTasks = async () => {
        const response = await fetch('http://localhost:3000/completed-tasks')
        const json = await response.json()
        console.log(json);
        this.setState({tasks: json})
    }

    deleteTask = (e) => {
        const url = 'http://localhost:3000/task/' + e.target.dataset.taskid;
        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                this.getCompletedTasks();
            })
    }

    render() {
        return (
            <div class={this.props.class}>
                <Header name="Completed Tasks" />
                {this.state.tasks.map(tasks => (
                    <li>
                        {tasks.task} <Button name="Delete Task" click={this.deleteTask} taskId={tasks._id} />
                    </li>
                ))}
            </div>
        )
    }
}