import React, {Component} from 'react';
import {Header} from "../Header";
import {LabelAndInput} from "../FormLabelAndInput";
import {Button} from "../Button";

export class AddNewTaskForm extends Component {

    submitNewTask = (e) => {
        fetch("http://127.0.0.1:3000/task", {
            method: 'POST',
            body: JSON.stringify({task: e.target.previousSibling.children[1].value}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                e.target.previousSibling.children[1].value = '';
            })
    }

    submitAndUpdateTasks = (e) => {
        this.submitNewTask(e);
        this.props.getUncompletedTasks();
    }

    render() {
        return(
           <div>
               <Header name="Add New Task" />
               <LabelAndInput name="New Task: " type="text" />
               <Button name="Completed?" name="Add New Task!" click={this.submitAndUpdateTasks} />
           </div>

        )
    }
}