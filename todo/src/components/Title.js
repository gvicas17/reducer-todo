import React, {useReducer, useState} from 'react'


const initialTitle = {
    title: "ToDo List"
}

const reducer = (state, action) => {
    switch(action.type){
    case 'UPDATE_TITLE':
        return{
            ...state, 
            title: action.payload
        }
    default:
        return state
}
}


export default function Title () {

     const [valueState, setValueState] = useState('')
    const [state, dispatch] = useReducer(reducer, initialTitle)

    console.log(state)
    const onChange = e => {
        setValueState(e.target.value)
    }

    return(
        <div>
            <h1>{state.title}</h1><input onChange = {onChange} value = {valueState}></input><button onClick = {() => dispatch({type: 'UPDATE_TITLE', payload: valueState})}>Change Title</button>
        </div>
    )
}

