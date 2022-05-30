import { todosReduser } from "./redusers/todoRedusers/todoReduser";
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createLogger} from "redux-logger";

const persistConfig = {
    key: 'root',
    storage,

  };

const timeMiddleware = store => next => action => {
  const delay = action?.meta?.delay;
  if(!delay) {
      return next(action)
  }
  const timeOut = setTimeout(() => next(action), delay)
  return () => {
    clearTimeout(timeOut)
    console.log('удаление');
  }
}

const logger = createLogger({
  diff: true,
  collapsed: true
})

const rootReducer = combineReducers ({
    todos: todosReduser
    
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(persistedReducer, applyMiddleware( timeMiddleware, logger));
export const persist = persistStore(store); 





