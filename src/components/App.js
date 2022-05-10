import React from "react";
import Header from "./Header";
import TodoContainer from "./TodoContainer";
import TodoForm from "./TodoForm";
import '../css/app.css';

const App = (props) => {
    return (
        <div className="app">
            <Header title="TODO"/>
            <TodoContainer />
            <TodoForm />
        </div>
    )
};

export default App;

