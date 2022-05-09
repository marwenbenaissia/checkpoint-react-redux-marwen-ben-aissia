import './App.css';
import {TodoListStore } from './components/TodoList';
import {TodoFilterStore } from './components/TodoFilter';
import { AddTodoForm } from './components/AddTodoForm';

function App() {
  return (
    <div className="App">
    <div className="nav">
       <TodoFilterStore/>
       <AddTodoForm/>
    </div>
    <div className="listes">
       <TodoListStore/>
    </div>
     
      
    </div>
  );
}

export default App;
