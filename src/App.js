import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/createTodoButton';
import { useState } from 'react';

function useLocalStoragexD(itemName, initialValue){
  

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (nuevosItem) =>{
    localStorage.setItem(itemName,JSON.stringify(nuevosItem));
    setItem(nuevosItem)
  };

  return [item,saveItem];

}

function App() {


/*   const defaultTodos =[
    {text:"Aprender React default",completada:false},
    {text:"Aprender NextJs default",completada:false},
    {text:"Hacer lo de DHM default",completada:false},
    {text:"Conseguir Trabajo en Julio",completada:false}
  ]; 
    localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos)) */
 

  const[todos,saveTodos] = useLocalStoragexD('TODOS_V1',[]);

  const [searchValue, setSearchValue] = useState("");
    console.log("Los usuarios buscan todos de xD:  "+searchValue);


  const completedTodos = todos.filter( element => !!element.completada).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
      element => {
      return element.text.toLowerCase().includes(searchValue.toLowerCase())
      }
    );

  const onComplete = (text)=>{
        const todosActualizados = todos.map((e)=>{
          if(e.text==text){
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

  
             /*  const [input,setInput] = useState("");



              const agregarTodos=()=>{
                const newTodo = {
                  key:input,
                  texto:input,
                  completada:false
                }
                const newTodos = [newTodo,...todos]
                setTodos(newTodos)
                console.log("Estoy haciendo CLICK")
              }  */




  return (
   
    <div className="App">
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(e=>(
              <TodoItem 
              key={e.text}
              text={e.text}
              completada={e.completada}
              onComplete={onComplete}
              deleteTodo={onDelete}
              />
          ))
        }
      </TodoList>

      <CreateTodoButton 

      />
      
    </div>
  );
}



export default App;
