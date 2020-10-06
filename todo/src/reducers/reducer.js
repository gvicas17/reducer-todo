

export const initialTitle = {
    title: "ToDo List"
}


export const initialState = [
    {
    item: 'Learn Redux',
    completed: false, 
    id: 1234567,
},
{
    item: 'Learn React',
    completed: false, 
    id: 1234568,
}
]

 export const reducer = (state, action) => {
    switch(action.type){
    case 'UPDATE_TITLE':
        return{
            ...state, 
            title: action.payload
        }
        case 'UPDATE_LIST':
        return[ 
            ...state, 
            {
            item: action.payload,
            completed: false,
            id: Date.now(),
        }
    ]
        case 'TOGGLE_TASK':
            return state.map(item =>
                    item.id === action.payload?
                    {
                        ...item, 
                        completed: !item.completed
                    }
                :item)
        case 'CLEAR_COMPLETED':
            return state.filter(item => !item.completed)

    default:
        return state
}
}
