import React from 'react';

const Footer = ({ tasks, clearCompleted }) => {
  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <footer style={footerStyle}>
      <span>{activeTasksCount} tasks left</span>
      <button onClick={clearCompleted} style={clearButtonStyle}>Clear Completed</button>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#282c34',
  color: 'white',
};

const clearButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#61dafb',
};

export default Footer;
