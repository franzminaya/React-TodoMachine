import './App.css';
import { AppUI } from './AppUI';
import { useState } from 'react';
import { useLocalStoragexD } from './useLocalStorage';


function App() {

  const[todos,saveTodos] = useLocalStoragexD('TODOS_V1',[]);

  const [searchValue, setSearchValue] = useState("");
    console.log("Los usuarios buscan TODOS de xD:  "+searchValue);


  const completedTodos = todos.filter( element => !!element.completada).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
      element => {
      return element.text.toLowerCase().includes(searchValue.toLowerCase())
      }
    );

  const onComplete = (text)=>{
      const todosActualizados = todos.map((e)=>{
          if(e.text===text){
              e.completada= !e.completada;
          }
          return e;
      });
      saveTodos(todosActualizados)
    }

  const onDelete = (text) => {
      const tareasActualizadas = todos.filter((e)=> e.text !== text)
      saveTodos(tareasActualizadas)
    }

  return(

      <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      onComplete={onComplete}
      onDelete={onDelete}
      />
  )
}
export default App;
