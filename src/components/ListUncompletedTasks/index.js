import React, {Component} from 'react';
import {Button} from "../Button";
import {Header} from "../Header";
import {AddNewTaskForm} from "../AddNewTask";

export class UncompletedTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.getUncompletedTasks();
    }

    getUncompletedTasks = async () => {
        const response = await fetch('http://localhost:3000/task')
        const json = await response.json()
        this.setState({tasks: json})
    }

    markTaskCompleted = (e) => {
        const url = 'http://localhost:3000/task/' + e.target.dataset.taskid;
        fetch(url, {
            method: 'PUT'
        }).then(response => response.json())
            .then(data => {
            console.log(data)
            this.getUncompletedTasks();
        })
    }

    render() {
        return (
                <div className={this.props.class}>
                    <Header name="Tasks To Complete" />
                    {this.state.tasks.map(tasks => (
                    <li>
                        {tasks.task} <Button name="Completed?" click={this.markTaskCompleted} taskId={tasks._id} />
                    </li>
                    ))}
                    <AddNewTaskForm getUncompletedTasks={this.getUncompletedTasks}/>
                </div>

    )}
}
