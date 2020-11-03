
export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
},
{
    item: 'go vote',
    completed: false,
    id: 3892987590
}
]

export const reducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_LIST': 
        return[
            ...state,
            {
            item: action.payload, 
            completed: false,
            id: Date.now(),
        }
    ]

        case 'TOGGLE':
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

