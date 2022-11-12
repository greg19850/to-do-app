import React, { Component } from 'react';
import TaskAddPanel from './TaskAddPanel';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  counter = 3;

  state = {
    tasks: [
      {
        id: 0,
        text: 'Do car service',
        date: '22/10/2022',
        important: true,
        active: true,
        completeDate: null
      },
      {
        id: 1,
        text: 'Watch favourite TV show',
        date: '19/10/2022',
        important: false,
        active: true,
        completeDate: null
      },
      {
        id: 2,
        text: 'Eat dinner in restaurant',
        date: '16/11/2022',
        important: false,
        active: true,
        completeDate: null
      },
      {
        id: 3,
        text: 'Enjoy Christmas',
        date: '24/12/2022',
        important: true,
        active: true,
        completeDate: null
      }
    ]
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.completeDate = new Date().getTime();
      }
    })

    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })
  }


  addTask = (text, date, important) => {
    if (text.length > 2) {
      const newTask = {
        id: this.counter,
        text,
        date,
        important,
        active: true,
        completeDate: null
      }
      this.counter++

      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask]
      }))

      return true
    } else {
      alert('Task name too short!')
    }

  }

  render() {
    return (
      <div className='App'>
        <h1>To Do App</h1>
        <TaskAddPanel add={this.addTask} />
        <TaskList tasks={this.state.tasks} change={this.changeTaskStatus} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;