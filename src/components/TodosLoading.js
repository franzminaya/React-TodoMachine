import React from "react";
import "../styles/TodosLoading.css"


function TodosLoading(){ 
    return(
        <>
            <p className="loader-text">Loading</p>
            <div className="loader">
                
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>

    )
}

export { TodosLoading }