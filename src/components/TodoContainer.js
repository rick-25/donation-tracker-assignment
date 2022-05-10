import React from "react";
import Todo from "./Todo";

import '../css/todocontainer.css';

const TodoContainer = (props) => {
    return (
        <div className="todo-container glass-effect">
            <Todo />
            <Todo />
        </div>
    )
}

export default TodoContainer;