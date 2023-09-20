import React from "react";
import "../styles/TodoSearch.css"
import { BsSearch } from "react-icons/bs";


function TodoSearch({searchValue,setSearchValue,loading}){

    return(
        
            <label className="label-container">
                <input
                    className="inputSearch"
                    placeholder="Busca algun TODO..." 
                    value={searchValue}
                    onChange={(e)=>{setSearchValue(e.target.value)}} 
                    disabled={loading}
                />
                < BsSearch className="search-icon" />
            </label>
              
    )
}

export { TodoSearch }