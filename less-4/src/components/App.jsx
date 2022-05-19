import {React} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import Chat from '../pages/chat'
import Profile from '../pages/profile'
import NoteFound from '../pages/notFound'
import Layout from './layout'


function App() {
  return (
   
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route  path='/' element ={<Home />}/>
        <Route  path='/chat' element ={<Chat />}/>
        <Route  path='/profile' element = {<Profile />} />
        <Route  path='*' element = {<NoteFound />} />
      </Route>
    </Routes>
   
  );
}

export default App;
