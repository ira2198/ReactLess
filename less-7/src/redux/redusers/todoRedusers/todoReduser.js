import {DELETE_TODO} from '../../action/todoAction'



const initialState = {
    todos: [
        {
        id: 1, title: "купить хлеб"
        },
        {
        id: 2, title: "купить молоко"
        },
        {
        id: 3, title: "найти рецепт борща"
        },
        {
        id: 4, title: "найти слезу асхи"
        },
        {
        id: 5, title: "отвезти посылку"
        },
    ]
}

export const todosReduser = (state = initialState, action) =>{
    switch (action.type) {
        
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }

    default:
        return state
}
}