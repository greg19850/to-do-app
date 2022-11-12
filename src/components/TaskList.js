import React from 'react';
import Task from './Task';

function TaskList(props) {
  const active = props.tasks.filter(task => task.active);
  const complete = props.tasks.filter(task => !task.active);

  if (complete.length >= 2) {
    complete.sort((a, b) => b.completeDate - a.completeDate);
  };

  if (active.length >= 2) {
    console.log(active);
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }

  const activeTasks = active.map(task => <Task key={task.id} task={task} change={props.change} deleteTask={props.deleteTask} />);
  const completeTasks = complete.map(task => <Task key={task.id} task={task} change={props.change} deleteTask={props.deleteTask} />);

  return (
    <>
      <div className='active'>
        <h2>Tasks To Do</h2>
        {activeTasks}
      </div>
      <div className='complete'>
        <h3>Complete tasks <span>({complete.length})</span></h3>
        {completeTasks}
      </div>
    </>

  );
}

export default TaskList;