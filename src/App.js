import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Button} from "./components/Button";
import {UncompletedTasks} from "./components/ListUncompletedTasks";
import {CompletedTasks} from "./components/ListCompletedTasks";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {completedClass: 'hidden', uncompletedClass: ''}
    }

    getCompletedTasks = async () => {
        const response = await fetch('http://localhost:3000/completed-tasks')
        const json = await response.json()
        console.log(json);
        this.setState({tasks: json})
    }

    displayCompletedTasks = () => {
        if(this.state.completedClass === 'hidden') {
            this.setState({uncompletedClass: 'hidden'})
            this.setState({completedClass: ''})
        } else {
            this.setState({uncompletedClass: ''})
            this.setState({completedClass: 'hidden'})
        }
    }

    render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
              <Header name="TO DO LIST" />

              <Button name="See completed tasks" click={this.displayCompletedTasks} />
              <UncompletedTasks class={this.state.uncompletedClass}/>
              <CompletedTasks class={this.state.completedClass}/>
          </header>
        </div>
    );
  }
}

export default App;
