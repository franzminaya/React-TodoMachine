import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    onDelete
}){

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

export {AppUI}