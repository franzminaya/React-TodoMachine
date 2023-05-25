import React from "react";
import "../styles/TodoCounter.css"
import Confetti from "react-confetti";


function TodoCounter({total,completed}) {

    if(total && total===completed){
        return(
            <>
                <Confetti className="confeti"
                    gravity={0.05} 
                />
                <h1 className="todoCounter">
                    
                    Felicidades Complestaste {completed} de {total} TODOs <img className="contrat-gif" src="https://media.tenor.com/8z51fJ6fIfoAAAAi/like-thumbs-up.gif" alt="Gif de felicidades" />
                </h1>
            </>
            
        )
    }else{ 
        return(
            <h1 className="todoCounter">
                Has Completado <span>{completed}</span> de <span>{total}</span> TODOs <img className="contrat-gif" src="https://media.tenor.com/73zLIGSkI08AAAAi/yum-yumyum.gif" alt="Gif normal" />
            </h1>
        )
    }
    
}

export {TodoCounter}
