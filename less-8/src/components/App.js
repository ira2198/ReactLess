import { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { loadTodos } from '../redux/reduser/todoReduser';
import { errorSelector, todoLoading, todosSelector } from '../redux/reduser/todoSelector';


function App() {

const todos = useSelector(todosSelector);
const loading = useSelector(todoLoading);
const error = useSelector(errorSelector);
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(loadTodos())
}, [] )


const reboot = () => {
  dispatch(loadTodos())
}

if (loading) {
  return (
    <div> идет загрузка...</div>  
 )
}

if (error) {
  return (
    <div> Ошибка загщрузки 
     <button  onClick = {reboot}>Обновить страницу</button>
    </div>  
 )
}

  return (
    <div >
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul>
             <li> {todo.title}</li>
          </ul>
          
        </div>        
      ))}
    </div>
  );
}

export default App;