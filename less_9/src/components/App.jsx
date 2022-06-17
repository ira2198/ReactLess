import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/registration';
import Login from '../pages/login';
import AboutPage from '../pages/About';
import Layout from './layout';
import ProtectRoutes from './protectRoutes';
import AddContacts from '../pages/addContacts';
import View from './view';



function App() {



  return (
  
      <Routes>
        <Route path = {'/'} element = {<Layout/>} >
            
          <Route path = {'/'} element = {<ProtectRoutes> <Home /> </ProtectRoutes> } />          
          <Route path = {'/registration'} element = { < Register />} />  
          <Route path = {'/login'} element = {<Login />} />  
          <Route path = {'/About'} element = {<AboutPage />}/>

          <Route path = {'/addContacts'} element = { <ProtectRoutes> <AddContacts/> </ProtectRoutes>}/>
          <Route path = {'/update/:id'} element = { <ProtectRoutes> <AddContacts/> </ProtectRoutes>}/>    
          <Route path = {'/view/:id'} element = { <ProtectRoutes> <View/> </ProtectRoutes>}/>

        </Route>

      </Routes>
  )}

export default App;
