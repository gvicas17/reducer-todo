import React, {useState, useReducer} from 'react'
import {initialState, reducer} from '../reducers/reducer'
import '../App.css'



export default function TodoList () {
    const [valueState, setValueState] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        setValueState(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'UPDATE_LIST', payload: valueState })
        setValueState('')
    }

    const clearOnClick = (e) => {
        e.preventDefault()
        dispatch({type: 'CLEAR_COMPLETED', payload: state.completed})
    }

   


    return(
        <div>
            <form onSubmit = {onSubmit}>
                <label>Todo Name:
                <input
                 type = 'text'
                 name = 'taskName'
                 value = {valueState}
                 onChange = {handleChange}
                />
                </label>
                <button>Add New Todo</button>
            </form>
            <div>
                {state.map (task => (
                    <div className = {task.completed === false ? 'task' : 'taskCompleted'} 
                    onClick = {() => dispatch({type: 'TOGGLE', payload: task.id })}>
                    <p>{task.item}</p>
                    </div>
                ))}
            </div>
            <button onClick =  {clearOnClick}>Clear TodoList</button>
        </div>
    )
}