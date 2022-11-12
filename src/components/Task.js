import React from 'react';

function Task(props) {
  const { text, date, id, active, important, completeDate } = props.task

  const style = {
    color: 'red'
  }

  if (active) {
    return (
      <div className='activeTask'>
        <strong style={important ? style : null}>{text}</strong> - Complete by: <span>{date}</span> <button className='status' onClick={() => props.change(id)}>Move to complete</button>
        <button className='delete' onClick={() => props.deleteTask(id)}>X</button>
      </div>
    );
  } else {
    const finishDate = new Date(completeDate).toLocaleString()

    return (
      <div className='completeTask'>
        <strong>{text}</strong> <em>(complete by: {date})</em><br />
        Task completed on: {finishDate}
        <button className='delete' onClick={() => props.deleteTask(id)}>X</button>
      </div>
    )
  }
}

export default Task;