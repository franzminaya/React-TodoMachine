import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import './App.css';
import React from 'react';
import { Modal } from '../Modal/Modal';



function AppUI(){

    const {
        loading,
        error,
        searchedTodos,
        onCompleteTodo,
        onDeleteTodo,
        openModal,
        setOpenModal
    }= React.useContext(TodoContext)

    return (

        <div className="App">
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading? <TodosLoading /> : ""}
                {error? <TodosError /> : ""}
                {(!loading && searchedTodos.length===0)? <EmptyTodos /> :""}

                {searchedTodos.map(e=>(
                    <TodoItem 
                    key={e.text}
                    text={e.text}
                    completada={e.completada}
                    onCompleteTodo={onCompleteTodo}
                    onDeleteTodo={onDeleteTodo}
                    />
                ))
                }
            </TodoList>
            {openModal &&
                (<Modal>
                La funcionalidad de crear TODOS
                </Modal>)
            }

            <CreateTodoButton />

            
        </div>
    );
}

export {AppUI}