import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Messages from './messages';
import Chats from './chats';


function App() {
  return (
    
      <Routes>
        <Route path='/' element = {<Chats />}></Route>
        <Route path='/message/:id'  element = { <Messages />}></Route>    
      </Routes>
      
  );
}

export default App;
