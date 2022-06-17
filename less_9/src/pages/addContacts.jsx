import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db as firebaseDB } from '../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.css';
import '../styles/inputs.css';
import '../styles/btn.css';

const initialState = {
    name: '',
    email: '',
    phone: ''
}

const AddContacts = () => {

    const [state, setState] = useState(initialState);
    const {name, email, phone} = state;
    const navigate = useNavigate()
    const {id} = useParams();

    const inputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]:value})
        }

    const handleSubmit = (e) => {
         e.preventDefault(); 
        if (!name || !email || !phone) {
            toast.error('Пожалуйста, заполните все поля!')
        } else {
            if(!id) {
                firebaseDB.child('contact').push(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success('Контакт упешно добавлен :)')
                        setTimeout(() => (
                            navigate('/')
                        ), 5000)
                    }
                })
            } else {
                firebaseDB.child(`contact/${id}`).set(state, (err) => {
                    if(err) {
                        toast.error(err)
                    } else {
                        toast.success('Контакт успешно обновлен')
                        setTimeout(() => (
                            navigate('/')
                        ), 5000)
                    }
                })
            }
        }
    }

    return (
        <div className="container">
            <form className="formAdd">
                <label htmlFor = {'name'} > Name
                    <input className="inputAdd" type = {'text'} id = {'name'} name = {'name'} placeholder = {'введите имя'} value = { name || '' } onChange = {inputChange} />
                </label>
                <label htmlFor = {'email'}> Email
                    <input  className="inputAdd" type = {'email'} id = {'email'} name = {'email'} placeholder = {'введите email'}  value = { email || '' } onChange = {inputChange} />
                </label> 
                <label htmlFor = {'phone'}> Phone
                    <input className="inputAdd" type = {'number'} id = {'phone'} name = {'phone'} placeholder = {'введите номер телефона'}  value = { phone || '' } onChange = {inputChange} />
                </label>
                    <input  className={ id ?  'btnAddChange btnChangeContact' : 'btnAddChange btnAddContact'} type={'submit'} value = {id ? 'Изменить' : 'Добавить'} onClick={handleSubmit}></input>
            </form>
            <ToastContainer/>
        </div>
    )
}



export default AddContacts;