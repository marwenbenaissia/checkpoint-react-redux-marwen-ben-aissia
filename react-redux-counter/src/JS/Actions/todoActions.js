import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../Constants/todoReducerActions-types";

export const toggletodoAction =(todo)=>({
       type:EDIT_TASK,
       payload:{...todo,isdone :!todo.isdone}
})
 export const deletetodoAction =(todo)=>({
       type:DELETE_TASK,
       payload:todo.id
})
 export const AddtodoAction =(description)=>({
       type:ADD_TASK,
       payload:{description}
})
        