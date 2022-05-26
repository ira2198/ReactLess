import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './reduces/chats/chatReducer';
import { messagesReducer } from './reduces/messages/messageReducer';


export  const store = createStore(combineReducers({
chats: chatsReducer,
messages: messagesReducer
}))
 