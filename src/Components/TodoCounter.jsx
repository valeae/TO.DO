import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter() {

    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <div>
         <h1 className="Title">Your Task App</h1>   
         <h2 className="TodoCounter"> Has completado {completedTodos } de { totalTodos} </h2>
        </div>
    )
}

export {TodoCounter}

