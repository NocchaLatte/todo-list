import React from "react";


const TodoItem = ({todo, deleteTodo}) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </div>
    );
}