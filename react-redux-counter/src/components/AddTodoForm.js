import { useRef } from "react"
import { useDispatch } from "react-redux"
import { AddtodoAction } from "../JS/Actions/todoActions"
import {Form,Button} from "react-bootstrap"
import "./AddTodoForm.css"
export function AddTodoForm (){
    const dispatch = useDispatch()
    const input =  useRef (null)
    const handlerSubmit = e => {
        e.preventDefault()
        dispatch(AddtodoAction(input.current.value))
        input.current.value =''
        input.current.focus()
    }

return (
    <Form className="form" onSubmit={handlerSubmit}>
    <ul className="varif_check">

        <li><label className="label">Add tasks</label></li>
        <li><input type="text" placeholder="" ref={input}/></li>
        <li><Button type="submit" variant="outline-success">Add</Button></li>
    </ul>
</Form>
)}