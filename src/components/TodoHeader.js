import React from "react";
import "../styles/TodoHeader.css"


function TodoHeader({children,loading}){
    
    return(
        <header>
            {React.Children.toArray(children).map(child => React.cloneElement(child,{loading}))}
        </header>
        
    )
}

export {TodoHeader}