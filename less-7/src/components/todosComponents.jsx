import React  from 'react';
import { todosSelector} from '../redux/redusers/todoRedusers/todoSelector';
import { DELETE_TODO} from '../redux/action/todoAction';
import { useSelector, useDispatch } from 'react-redux';


const Todos = () => {
const todoList = useSelector(todosSelector);
// console.log(todoList)
const dispatch = useDispatch();

 const delTodo = (id) => {
    dispatch ({ type: DELETE_TODO, payload: id, meta: { delay:3000 }})
 }

    return (         
   
        <div>              
            { todoList.map ((item) =>
                <div key={item.id}>                   
                    {item.title}                   
                    <button onClick={() => delTodo (item.id)}>delete</button>  
                    `${console.log(todoList)}`              
                </div>
            )}              
        </div>
        
    )
}


export default Todos;