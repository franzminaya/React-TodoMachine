import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButton({agregarTodo}){

    

    return(
        <button className="createTodoButton"
        onClick={agregarTodo}
        >+</button>
    )
}

export { CreateTodoButton}