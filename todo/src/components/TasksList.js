import React, {useState, useReducer} from 'react'
import {initialState, reducer} from '../reducers/reducer'



export default function TaskList () {
    const [valueState, setValueState] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    const onChange = e => {
        setValueState(e.target.value)
    }

    const onSubmit = (e)=> {
        dispatch({type: 'UPDATE_LIST', payload: valueState});
        e.preventDefault();
        setValueState('');
    }
    console.log(valueState)
    console.log(state)
    return(
    <div className = "container">
    <form onSubmit = {onSubmit}  className = "addTask">
       <input
       className = "taskInput"
       name = "taskInput"
       type = "text" 
       value = {valueState}
       onChange = {onChange} 
      />
       <button>Add New Task</button>
    </form>

    <div>
        {state.map (task => (
            <p onClick = {() => dispatch({type: 'TOGGLE_TASK', payload: task.id})}>{task.item}</p>
        ))}
    </div>
    </div>
    )
}