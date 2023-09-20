import React, { useState } from "react";
import "../styles/TodoForm.css"
import { TodoContext } from "../App/useTodos";

function TodoForm({addTodo,setOpenModal}){

    const [modalTextValue,setModalTextValue] =useState("");

    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(modalTextValue)
        setOpenModal(false)
    }

    const onCancel =(event)=>{
        event.preventDefault();
        setOpenModal(false)
    }

    const onChange =(event)=>{
        setModalTextValue(event.target.value)
    }


    return(

        <form className="" 
        onSubmit={onSubmit}>
            <div className="TodoForm-gifContainer">
                <label className="modal-label">Escribe tu nuevo TODO</label>
                <img className="TodoForm-gif" src="https://i.pinimg.com/originals/d0/6f/3f/d06f3f7e02bbf6f1277ae8bbb431995c.gif"/>
            </div>

            <textarea placeholder="Escribe tu nuevo Todo..."  onChange={onChange} />

            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel} >Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
            
            
            
        </form>
    )
}

export {TodoForm}