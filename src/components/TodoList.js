import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}
