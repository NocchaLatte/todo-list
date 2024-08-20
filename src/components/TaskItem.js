import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li style={task.completed ? completedTaskStyle : taskStyle}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleComplete} 
      />
      {task.text}
      <button onClick={deleteTask} style={deleteButtonStyle}>❌</button>
    </li>
  );
};

const taskStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const completedTaskStyle = {
  ...taskStyle,
  textDecoration: 'line-through',
  color: '#ccc',
};

const deleteButtonStyle = {
  marginLeft: '10px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'red',
};

export default TaskItem;
