import React, {useState, useReducer} from 'react'







export default function TaskList () {
    const [valueState, setValueState] = useState('')
    
    const onChange = e => {
        setValueState(e.target.value)
    }


    console.log(valueState)
    return(
    <div className = "container">
    <form  className = "addTask">
       <input
       className = "taskInput"
       name = "taskInput"
       type = "text"
       value = {valueState}
       onChange = {onChange} 
      />
       <button>Add New Task</button>
    </form>
    </div>
    )
}