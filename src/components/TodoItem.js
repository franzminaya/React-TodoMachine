import React from "react";
import "../styles/TodoItem.css"
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function TodoItem({text,completada,onCompleteTodo,onDeleteTodo}){

   

    return(
        <li className={completada? "todoItem completed" : "todoItem"}>
            <FaCheck className={completada? "icon check-icon completed" : "icon check-icon"} onClick={()=>onCompleteTodo(text)}/>
            <p className="text">{text}</p>
            <MdDeleteForever className="icon delete-icon" onClick={()=>onDeleteTodo(text)} />
        </li>
    )
}

export {TodoItem}