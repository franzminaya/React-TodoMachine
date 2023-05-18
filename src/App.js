import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/createTodoButton';




function App() {
  const defaultTodos =[
    { text:"Aprender Curso de Intro a React", completada:false},
    { text:"Aprender Curso de Next", comepletada:false},
    { text:"Aprender Curso de TypeScript", completada:true},
    { text:"Hacer el proyecto DHM", completada:true}
  ]
  return (
   
    <div className="App">

      <TodoCounter
        completed={16}
        total={20}
      />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(e=>(
            <TodoItem 
            key={e.text}
            text={e.text}
            completada={e.completada}
            />
        ))
        
        
        }
      </TodoList>

      <CreateTodoButton />
      
    </div>
  );
}



export default App;
