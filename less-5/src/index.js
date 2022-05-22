import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from '@redux-devtools/extension';

const initialState = { 
  count: 0
}
const reducer = (state = initialState, action ) => {
  switch(action.type){ 
    case 'increase':
      return {
          ... state, 
          count: state.count + 1
      }
      case 'decrease':
        return{
         ...state,
         count: state.count - 1
      }
      case 'del':
        return { 
          state,
          count: state.count = 0
        }


    default:
      return state
  }
}
const store = createStore(reducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


 reportWebVitals();
