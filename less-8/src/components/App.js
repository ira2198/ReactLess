import { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { loadTodos } from '../redux/reduser/todoReduser';
import { todoLoading, todosSelector } from '../redux/reduser/todoSelector';

import './App.css';


function App() {

const todos = useSelector(todosSelector)
console.log(todos)
const loading = useSelector(todoLoading)
const dispatch = useDispatch()

useEffect(() =>{
  dispatch(loadTodos())
}, [] )


if (loading) {
  return (
  <div> идет загрузка....</div>  
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



// const [todos, setTodos] = useState([])

// useEffect ( () => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then((data) => setTodos(data))
//     .catch((err) => alert(`возникла ошибка ${err.toString()}`))
// }, [] )
