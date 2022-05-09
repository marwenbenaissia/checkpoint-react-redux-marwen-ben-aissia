import "./TodoList.css"
import {ListGroup,Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { useCallback} from "react";
import { filterTodoSelector} from '../JS/Reducers/todoSelectors';
import { deletetodoAction, toggletodoAction } from '../JS/Actions/todoActions';



function  TodoItem ({todo,onToggle,onDelete}){
    return (

    <ListGroup.Item>
        <input className="box" type="checkbox" checked={todo.isdone} onChange={()=>onToggle(todo)}/>
            <label className="task">{todo.description}</label>
            <Button variant="outline-success" className="btn-del" onClick={()=> onDelete(todo)}>Delete task</Button>
    </ListGroup.Item>

  )
}
export function  TodoList ({todos,onToggle,onDelete}) {
   
return     <ListGroup> {todos.map(todo =><TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id}></TodoItem>)}  </ListGroup>
}
export function TodoListStore () {
    const todos = useSelector(filterTodoSelector)
    const dispatch = useDispatch()
    const onToggle = useCallback((todo) => {
        dispatch(toggletodoAction(todo))
    },[dispatch])
    const onDelete = useCallback((todo) => {
        dispatch(deletetodoAction(todo))
    },[dispatch])
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>}
