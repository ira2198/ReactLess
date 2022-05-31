import { GET_TODOS, LOADING_NOW, ERROR_LOADING } from "../actions/actionTyps"
import {addTodos, load, errorLoad} from '../actions/action'

const initialState ={
    todos: [],
    loadingNow: false,
    error: null
}

export const todosReduser = ( state = initialState, action) => {
    switch(action.type){

        case LOADING_NOW:
            return {
                ...state,
                loadingNow: true
            }

        case GET_TODOS:
            return{
            ...state,
            todos:action.payload,
            loadingNow: false
            }

        case ERROR_LOADING:
            return {
                ...state,
                error: action.payload,
                loadingNow: false
             }

        default:
        return state
    }  
} 

export const loadTodos = () => {
    return async dispatch => {
        dispatch (load )
       try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const jsonData = await response.json();
        dispatch(addTodos(jsonData))
       }
       catch (err) {
        dispatch (errorLoad (err))
       }
    }
}