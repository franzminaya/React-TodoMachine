import React from "react";
import { useLocalStoragexD } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = React.createContext();

    function useTodos(){

        const{item:todos,saveItem:saveTodos,loading,error,sincronize:sincronizeTodos} = useLocalStoragexD('TODOS_V1',[]);

        const [searchValue, setSearchValue] = useState("");

        const [openModal,setOpenModal] = useState(false);

        const completedTodos = todos.filter( element => !!element.completada).length;
        
        const totalTodos = todos.length;


        const searchedTodos = todos.filter(
            element => {
            return element.text.toLowerCase().includes(searchValue.toLowerCase())
            }
        );


        const addTodo=(text)=>{
            const newTodos = [...todos];
            newTodos.push({
                text:text,
                completada:false
            })
            saveTodos(newTodos)
        }


        const onCompleteTodo = (text)=>{
            const todosActualizados = todos.map((e)=>{
                if(e.text===text){
                    e.completada= !e.completada;
                }
                return e;
            });
            saveTodos(todosActualizados)
        }

        
        const onDeleteTodo = (text) => {
            const tareasActualizadas = todos.filter((e)=> e.text !== text)
            saveTodos(tareasActualizadas)
            }


        return{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onCompleteTodo,
            onDeleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            sincronizeTodos
    
        };       
    }

export { useTodos};