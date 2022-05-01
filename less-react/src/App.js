
import {useState, useEffect} from 'react';     
import './App.css';


function App() {

  const [taskList, setTaskList] = useState ([]);
  const [task, setTask] = useState('');
  const [name, setName ] = useState('');
        
  const addTask = () => {
    let randomId = (Math.floor( Math.random() * 1000) + 1);
      setTaskList([...taskList, { 
        task: task, name: name, id: randomId }])       
  };

  useEffect (() =>{
   setTimeout(() => {
    if (taskList.length >= 1 ) {
         alert(`Просмотрите задания`);
      }
   }, 1000);
  },[taskList]
  )

  return (  
   <div className='contain'>
    <h1 className = 'heder'>Список задач</h1>  
    <div >  
      <div >
        < input value={task} onChange = {(e)=>setTask(e.target.value)} placeholder =' Введите задание' className='inputBlock'/>
        < input value={name} onChange = {(e)=>setName(e.target.value)}  placeholder =' Введите имя сотрудника' className='inputBlock'/>
      </div>
      < button onClick={addTask} className = 'buttonAdd'>Добавить задание</button>
         
      {taskList.map((item)=>{        
        return(
          <div key = {item.id} className='blockTasks'> 
            <div className='taskStr'> {item.task}</div>
            <div className='taskStr'> {item.name}</div>
          </div> 
         )
       })}
       </div>
   <div className ='goodDay'>Хорошего дня!</div> 
    </div>  
    )

};
export default App