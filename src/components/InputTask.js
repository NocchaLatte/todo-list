import React, { useState } from 'react';

const InputTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0',
};

const inputStyle = {
  width: '60%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  marginLeft: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#61dafb',
  cursor: 'pointer',
};

export default InputTask;