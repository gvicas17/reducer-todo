import React, {useReducer, useState} from 'react'
import {initialTitle, reducer} from '../reducers/reducer'



export default function Title () {

     const [valueState, setValueState] = useState('')
    const [state, dispatch] = useReducer(reducer, initialTitle)

    console.log(state)
    const onChange = e => {
        setValueState(e.target.value)
    }

    return(
        <div>
            <h1>{state.title}</h1>
            <input onChange = {onChange} value = {valueState}></input>
            <button onClick = {() => dispatch({type: 'UPDATE_TITLE', payload: valueState})}>Change Title</button>
        </div>
    )
}

