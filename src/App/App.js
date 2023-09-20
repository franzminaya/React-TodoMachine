
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { useTodos } from './useTodos';
import './App.css';
import React from 'react';
import { Modal } from '../Modal/Modal';
import { TodoCounter } from '../components/TodoCounter';
import { TodoForm } from '../components/TodoForm';
import { TodoHeader } from '../components/TodoHeader';
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert/ChangeAlert';




function App() {

  const {
    loading,
    error,
    searchedTodos,
    onCompleteTodo,
    onDeleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal,
    sincronizeTodos
}= useTodos()

return (

  <div className="App">
     
      <TodoHeader loading={loading}>
          <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
              
          />
          <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              
          />
      </TodoHeader>


      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText = {searchValue}
        onError={()=><TodosError />}
        onLoading={()=><TodosLoading/>}
        onEmptyTodos={()=><EmptyTodos />}
        onEmptyTodosSearch ={(searchText)=> <p>No hay resultados para {searchText} </p>}

        /* render = {e => (
            <TodoItem 
              key={e.text}
              text={e.text}
              completada={e.completada}
              onCompleteTodo={onCompleteTodo}
              onDeleteTodo={onDeleteTodo}
            />
        )} */
      >
      {e =>(
            <TodoItem 
              key={e.text}
              text={e.text}
              completada={e.completada}
              onCompleteTodo={onCompleteTodo}
              onDeleteTodo={onDeleteTodo}
            />)}
      </TodoList>

      {openModal &&
          (<Modal>
              <TodoForm 
              setOpenModal={setOpenModal}
              addTodo={addTodo}
              />
          </Modal>)
      }

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener
        sincronizeApp={sincronizeTodos}
      />
      
  </div>
);
}
export default App;