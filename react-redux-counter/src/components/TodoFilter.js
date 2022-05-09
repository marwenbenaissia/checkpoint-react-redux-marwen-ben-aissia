import {Button} from 'react-bootstrap';
import { connect } from "react-redux"
import { setFilterAction } from "../JS/Actions/filterAction"
import { filterSelector } from "../JS/Reducers/FilterSelector"
import "./TodoFilter.css"

export function TodoFilter ({value, onChange}){
    return (
    <ul className="varif_check">
        <li><Button variant="outline-success" disabled={value===null} onClick ={()=> onChange(null)}>All</Button></li>
        <li><Button variant="outline-success" disabled={value===true} onClick ={()=> onChange(true)}>Done</Button></li>
        <li><Button variant="outline-success" disabled={value===false} onClick ={()=> onChange(false)}>Not Done</Button></li>
    </ul>
    )
}
export const TodoFilterStore = connect(
    state => ({
        value: filterSelector(state)
    }),
    dispatch =>({
        onChange: (value)=> dispatch(setFilterAction(value))
    })
)(TodoFilter)