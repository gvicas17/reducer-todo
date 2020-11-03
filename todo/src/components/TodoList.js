import React, {useState, useReducer} from 'react'
import {initialState, reducer} from '../reducers/reducer'


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
        </div>
    )
}