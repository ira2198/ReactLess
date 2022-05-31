import {createStore} from 'redux';
import { todosReduser } from './reduser/todoReduser';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'

export const store = createStore( todosReduser, applyMiddleware(thunk));
