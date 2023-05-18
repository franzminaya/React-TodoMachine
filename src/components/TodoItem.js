import React from "react";
import "../styles/TodoItem.css"

function TodoItem({text,completada}){
    return(
        <li>
            <span className={completada? "completed" : ""}>V</span>
            <p>{text}</p>
            <span>X</span>
        </li>
    )
}

export {TodoItem}