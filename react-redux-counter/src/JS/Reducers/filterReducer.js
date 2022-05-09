 
import {UPDATE_FILTER} from "../Constants/filterReducerActions-types"

export function filterReducer ( state= null , action){
    switch ( action.type){
        case UPDATE_FILTER: 
        return action.payload
        default:
            return state;
    }
}