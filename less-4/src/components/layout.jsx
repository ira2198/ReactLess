import React from "react";
import {NavLink, Outlet} from 'react-router-dom'
import './app.css'

const Layout = ()=>{
    return (
        <>
         <div className='navHeder'>
         <NavLink to={'/'}>
            <button className="btnNav">Главная</button>
        </NavLink>
        <NavLink to={'/profile'}>
            <button className="btnNav">Профиль</button>
        </NavLink>
        <NavLink to={'/chat'}>
            <button className="btnNav">Чат</button>
        </NavLink>        
        </div>
        <main>
            <Outlet> </Outlet>
        </main>

        </>
    )
}

export default Layout