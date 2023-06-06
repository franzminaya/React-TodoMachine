import React from "react";
import "../styles/CreateTodoButton.css"
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton(){

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    
    return(
        <button className="createTodoButton"
        onClick={()=>{setOpenModal(!openModal)}}
        >+</button>
    )
}

export { CreateTodoButton}