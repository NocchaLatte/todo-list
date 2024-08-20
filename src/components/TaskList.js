import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul style={listStyle}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  width: '80%',
  margin: '0 auto',
};

export default TaskList;
