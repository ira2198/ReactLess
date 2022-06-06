import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from "../redux/reduser/useSelector";
import { useEffect } from "react";
import { registerInitiate } from "../redux/actions/action";
import './styles/header.css'
import './styles/main.css'
import './styles/btn.css'
import './styles/inputs.css'


const Register = () => {
    const [mail, setMail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector( userSelector );
    const navigate = useNavigate();


    useEffect ( () => {
        if(user) {
            navigate('/home')
        }
    }, [user, navigate])


    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword) { 
            return
        }
        dispatch(registerInitiate(mail, login, password))
    }

    

       return (
        <div >
            <header className="blockHeader"> 
                <h2>Регистрация</h2>
                <NavLink to = {'/login'}> <button className="btnHeader">Войти</button> </NavLink>              
            </header>
            <main>
                <form className="formStart" onSubmit={submitHandler} > 
                    <input className="inputStart" placeholder="введите e-mail" type = 'text' value={mail} onChange = {(e) => setMail(e.target.value)} />
                    <input className="inputStart" placeholder="введите логин" type = 'text' value={login} onChange = {(e) => setLogin(e.target.value)} />
                    <input className="inputStart" placeholder="придумайте пароль" type = 'text' value={password} onChange = {(e) => setPassword(e.target.value)} />
                    <input className="inputStart" placeholder="повторите пароль" type = 'text' value={confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} />
                    <button className="btnSubmit" type="submit">Отправить</button>
                </form>
            </main>
        </div>
    )
 }

 export default Register
