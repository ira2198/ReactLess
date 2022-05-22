import {useDispatch, useSelector} from "react-redux";
import './App.css';



function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch ({type: 'increase'})
  }
  const decrease = () =>{
    dispatch({type: 'decrease'})
  }

  const del = () =>{
    dispatch({type: 'del'})
  }

  return (
    <div className = 'conteiner'>
      <div className="count">
        {count}         
      </div>
      <div className="blockBtn"> 
        <button onClick={increase} className= "btn">+</button>
        <button onClick={decrease} className= "btn">-</button>
        <button onClick={del} className= "btn">del</button>
      </div>
    </div>

  );
}

export default App;
