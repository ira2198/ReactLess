import * as types from './actionsTyps';
import {auth} from '../../firebase/firebase';



export const registerStart = () => ({
    type: types.REGISTER_START
})

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user 
})

export const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err
})



export const loginStart = () => ({
    type: types.LOGIN_START
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user 
})

export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err
})



export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logoutError = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err
})


export const registerInitiate = ( mail, login, password ) => { 
    return ( dispatch ) => {
       dispatch(registerStart());
       auth
        .createUserWithEmailAndPassword(mail, password)
        .then(({ user }) => {
            user.updateProfile({ login })

            dispatch(registerSuccess( user ))
        })
        .catch((err) => dispatch(registerError(err.message)))
    }
}

export const loginEnter = ( mail, password ) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword (mail, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((err) => {
                dispatch(loginError(err.message))
            }
            )
    }
}

export const logautInitiate = () => {
    return (dispatch) => {
         dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch ((err) => {
                dispatch(logoutError(err.message))
    })
    }
}