import React from "react";
import "../styles/TodoSearch.css"
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

function TodoSearch({searchValue,setSearchValue}){

    

   
    return(
        
            <label className="label-container">
                <input className="inputSearch" placeholder="Busca algun TODO..." value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} />
                < BsSearch className="search-icon" />
            </label>
           
        
        
        
        
    )
}

export { TodoSearch }