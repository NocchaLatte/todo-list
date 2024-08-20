function App() {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (task) => {
      setTasks([...tasks, { text: task, completed: false }]);
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