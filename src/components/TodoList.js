import React from "react";
import "../styles/TodoList.css"

function TodoList({error,loading,children,onError,onLoading,onEmptyTodos,searchedTodos,render,totalTodos,onEmptyTodosSearch,searchText}){

    const renderFunc = children || render

    return(
        <section className="todoList"  >
            
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !searchedTodos.length && !totalTodos) && onEmptyTodos()}
            {(!loading && !error)&& searchedTodos.map(renderFunc)}
            {(totalTodos && !searchedTodos.length)&& onEmptyTodosSearch(searchText)}
          
        </section>
        
    )
}

export {TodoList}