import { createSelector } from 'reselect';
import { filterSelector } from './FilterSelector';

export const  todoSelector =({todos})=>todos 

export const filterTodoSelector =createSelector(todoSelector,
filterSelector,
    (todos,filter)=>{
    if(filter===null){
    return todos
}
return todos.filter(todo=>todo.isdone === filter)
})
