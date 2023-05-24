import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/createTodoButton';
import { useState } from 'react';


function App() {


  const defaultTodos =[
    {text:"Aprender React default",completada:false},
    {text:"Aprender NextJs default",completada:false},
    {text:"Hacer lo de DHM default",completada:false},
    {text:"Conseguir Trabajo en Julio",completada:false}
  ];

  const[todos,setTodos] = useState(defaultTodos);

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
    setTodos(todosActualizados)
  }

  const eliminarTarea = (text) => {
 
    const tareasActualizadas = todos.filter((e)=> e.text !== text)
    setTodos(tareasActualizadas)
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
              deleteTodo={eliminarTarea}
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
