import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButton({openModal,setOpenModal}){

    
    return(
        <button className="createTodoButton"
        onClick={()=>{setOpenModal(!openModal)}}
        >+</button>
    )
}

export { CreateTodoButton}