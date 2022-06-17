import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginEnter } from "../redux/actions/action";
import { userSelector } from "../redux/reduser/useSelector";
import '../styles/main.css'
import '../styles/btn.css'
import '../styles/inputs.css'

const Login = () => {
const [mail, setMail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const user = useSelector( userSelector );
const navigate = useNavigate();

useEffect (() => {
    if(user) {
        navigate('/')
    }
}, [user, navigate] )

const submitHandler = (e) => {
    e.preventDefault();
    if(!password || !mail) {
         return
    }
    dispatch(loginEnter(mail, password))

}

    return (
        <div className="container">
            <div > 
                <div className="headerFirst" >ВХОД</div> 
            </div>
          
            <form className="formStart" onSubmit={submitHandler} >
                <input className="inputStart" placeholder="введите ваш e-mail" type={'text'}  value={mail} onChange={((e) => setMail(e.target.value))} />
                <input className="inputStart" placeholder="введите пароль" type={'text'} value={password} onChange={((e)=> setPassword(e.target.value))} />
                <button className="btnSubmit" type="submit">Войти</button>
                <NavLink  className = 'btnBackToRegistr' to={'/registration'} >  Зарегистрироваться </NavLink>
  
            </form>
           
        </div>
    )
}

export default Login