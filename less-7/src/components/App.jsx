import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Todos from './todosComponents'


function App() {
  return (  
     <Routes>
       <Route path='/' element={<Todos />}>
       </Route>
     </Routes>  
  );
}

export default App;
