import React from 'react';
import { format, isBefore, parseISO } from 'date-fns';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  // Get today's date
  const today = new Date();
  // Parse the due date from the task
  const dueDate = parseISO(task.dueDate);

  // Determine if the task is overdue
  const isOverdue = isBefore(dueDate, today) && !task.completed;

  return (
    <li style={task.completed ? completedTaskStyle : taskStyle}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleComplete} 
      />
      <span>{task.text}</span>
      <span style={isOverdue ? overdueStyle : dueDateStyle}>
        Due: {format(dueDate, 'yyyy-MM-dd')}
      </span>
      <button onClick={deleteTask} style={deleteButtonStyle}>❌</button>
    </li>
  );
};

const taskStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const completedTaskStyle = {
  ...taskStyle,
  textDecoration: 'line-through',
  color: '#ccc',
};

const dueDateStyle = {
  marginLeft: '20px',
  fontSize: '14px',
  color: '#888',
};

const overdueStyle = {
    ...dueDateStyle,
  color: 'red',
};

const deleteButtonStyle = {
  marginLeft: '10px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'red',
};

export default TaskItem;
