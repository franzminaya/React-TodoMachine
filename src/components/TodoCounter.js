import React from "react";
import "../styles/TodoCounter.css"
import Confetti from "react-confetti";


function TodoCounter ( {completedTodos,totalTodos,loading}){



    if(totalTodos && totalTodos===completedTodos){

        return(
            <>
                <Confetti className="confeti" gravity={0.04} />
                <h1 className={loading? "todoCounter-loading": "todoCounter"}>   
                    Felicidades Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs <img className="congrat-gif" src="https://media.tenor.com/8z51fJ6fIfoAAAAi/like-thumbs-up.gif" alt="Gif de felicidades" />
                </h1>
            </>
            
       
    )
        
    }else{ 
    
        return(
         
                <h1 className={loading? "todoCounter-loading": "todoCounter"}>
                    Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs <img className="congrat-gif" src="https://media.tenor.com/73zLIGSkI08AAAAi/yum-yumyum.gif" alt="Gif normal" />
                </h1>
        
        )
    
    }

}

export {TodoCounter}