import { GET_TODOS, LOADING_NOW, ERROR_LOADING} from "./actionTyps"




export const addTodos = (data) => ({
    type: GET_TODOS,
    payload: data
})

export const load = () => ({
    type: LOADING_NOW
})
 export const errorLoad = (err) => ({
    type: ERROR_LOADING,
     payload:err.toString()
 })