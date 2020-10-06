

export const initialTitle = {
    title: "ToDo List"
}


export const initialState = [
    {
    item: 'Learn Redux',
    completed: false, 
    id: 1234567,
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
    default:
        return state
}
}
