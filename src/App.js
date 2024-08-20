import React, { useState } from 'react';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (task, dueDate) => {
      setTasks([...tasks, { text: task, dueDate, completed: false }]);
    };
  
    const toggleComplete = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    };
  
    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  
    const clearCompleted = () => {
      const newTasks = tasks.filter(task => !task.completed);
      setTasks(newTasks);
    };
  
    return (
      <div className="App">
        <Header />
        <InputTask addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask} 
        />
        <Footer tasks={tasks} clearCompleted={clearCompleted} />
      </div>
    );
  }
  
  export default App;