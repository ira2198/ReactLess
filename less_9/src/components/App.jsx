import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Register from './registration';
import Login from './login';


function App() {
  return (
  
      <Routes>
        <Route path={'/home'} element = {<Home />} /> 
        <Route path = {'/registration'} element = { < Register />} />  
        <Route path={'/login'} element = {<Login />} />      
      </Routes>
  )}

export default App;
