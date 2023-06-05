import React from "react";
import "../styles/TodoCounter.css"
import Confetti from "react-confetti";
import { TodoContext } from "../TodoContext/TodoContext";


function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    if(totalTodos && totalTodos===completedTodos){
        return(
            <>
                <Confetti className="confeti"
                    gravity={0.05} 
                />
                <h1 className="todoCounter">
                    
                    Felicidades Complestaste {completedTodos} de {totalTodos} TODOs <img className="contrat-gif" src="https://media.tenor.com/8z51fJ6fIfoAAAAi/like-thumbs-up.gif" alt="Gif de felicidades" />
                </h1>
            </>
            
        )
    }else{ 
        return(
            <h1 className="todoCounter">
                Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs <img className="contrat-gif" src="https://media.tenor.com/73zLIGSkI08AAAAi/yum-yumyum.gif" alt="Gif normal" />
            </h1>
        )
    }
    
}

export {TodoCounter}
