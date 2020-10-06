import React, {useReducer}from 'react'
import { reducer, initialState} from '../reducers/reducer'


export default function ClearTasks (){
    const [state, dispatch] = useReducer(reducer, initialState)

    const onClick = (e) =>{
        e.preventDefault();
        dispatch({type: 'CLEAR_COMPLETED'});
    }
    return(
        <div>
            <button onClick = {onClick}>Clear Tasks</button>
        </div>
    )
}