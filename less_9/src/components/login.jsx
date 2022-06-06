import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginEnter } from "../redux/actions/action";
import { userSelector } from "../redux/reduser/useSelector";
import './styles/header.css'
import './styles/main.css'
import './styles/btn.css'
import './styles/inputs.css'

const Login = () => {
const [mail, setMail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const user = useSelector( userSelector );
const navigate = useNavigate();

useEffect (() => {
    if(user) {
        navigate('/home')
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
        <div>
            <header className="blockHeader"> 
                <h2 >ВХОД</h2> 
                <NavLink to={'/registration'} ><button className="btnHeader" >Регистрация</button></NavLink>
            </header>
            <main>
            <form className="formStart" onSubmit={submitHandler} >
                <input className="inputStart" placeholder="введите ваш e-mail" type={'text'}  value={mail} onChange={((e) => setMail(e.target.value))} />
                <input className="inputStart" placeholder="введите пароль" type={'text'} value={password} onChange={((e)=> setPassword(e.target.value))} />
                <button className="btnSubmit" type="submit">Войти</button>
            </form>
            </main>
        </div>
    )
}

export default Login