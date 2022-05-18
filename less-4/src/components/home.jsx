import React from "react";
import {NavLink} from 'react-router-dom'


const  Home = () =>{
    return ( 
        <div>
        <NavLink to={'/profile'}>
            <button>Профиль</button>
        </NavLink>
        <NavLink to={'/chat'}>
            <button>Чат</button>
        </NavLink>
        </div>
    ) 

}

export default Home