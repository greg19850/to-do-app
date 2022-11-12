import React, { Component } from 'react';


class TaskAddPanel extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    newTask: '',
    important: false,
    date: this.minDate

  };

  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({
        newTask: e.target.value
      })
    } else if (e.target.type === 'checkbox') {
      this.setState({
        important: e.target.checked
      })
    } else if (e.target.type === 'date') {
      this.setState({
        date: e.target.value
      })
    }
  }

  handleClick = () => {
    const { newTask, important, date } = this.state;

    const add = this.props.add(newTask, date, important);

    if (add) {
      this.setState({
        newTask: '',
        important: false,
        date: this.minDate
      })
    }
  }

  maxDate = (this.minDate.slice(0, 4) * 1 + 1) + '-12-31';

  render() {

    return (
      <div className='form'>
        <input type="text" placeholder='Add Task' value={this.state.newTask} onChange={this.handleChange} />
        <input type="checkbox" id='important' checked={this.state.important} onChange={this.handleChange} /><label htmlFor="important">Important?</label>
        <br />
        <label htmlFor="date">Complete before:</label> <input type="date" id='date' value={this.state.date} min={this.minDate} max={this.maxDate} onChange={this.handleChange} /> <br />
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    );
  }
}

export default TaskAddPanel;