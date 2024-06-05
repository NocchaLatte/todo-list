import React, {useState, useEffect} from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
    const [todos, setTodos] = useState([]);

    // Fetch todos from the server  when the component mounts
    useEffect(() => {
        axios.get("http://localhost:5000/api/todos/")
        .then(res => setTodos(res.data))
        .catch(err => console.log(err));
    }, []);
    
    // Add a new todo to the server
    const addTodo = (todo) => {
        axios.post("http://localhost:5000/api/todos/", todo)
        .then(res => setTodos([...todos, res.data]))
        .catch(err => console.log(err));
    }

    // Delete a todo from the server
    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
        .then(res => setTodos(todos.filter(todo => todo._id !== id)))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}
