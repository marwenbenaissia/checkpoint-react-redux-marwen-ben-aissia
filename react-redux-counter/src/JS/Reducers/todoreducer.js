
import {ADD_TASK, DELETE_TASK, EDIT_TASK} from '../Constants/todoReducerActions-types'
let id=2;
const initialState = [
      {
          id: 1,
          description: 'my first post',
          isdone: false
      },
      {
          id: 2,
          description: 'my seconde post',
          isdone: false
      }
  ]

export function todosReducer  (state = initialState,action)  {
    switch (action.type) {
        case ADD_TASK:
            return [...state, { id:++id,isdone:false,...action.payload}]
            
        case EDIT_TASK:
            return state.map(todo=>{ 
                if (todo.id === action.payload.id) {
                    return {...todo,...action.payload}
                }
                else return todo
            })
        case DELETE_TASK:
            return state.filter(todo =>todo.id !== action.payload)
        default:
            return state 
    }
  }