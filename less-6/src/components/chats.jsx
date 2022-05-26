import React, { useSelector } from 'react-redux';
import { chatSelector } from '../redux/reduces/chats/selectorChats';
import { NavLink } from 'react-router-dom';
import './App.css';

const Chats = () => {
    const chats = useSelector (chatSelector);

    return (
        <div className='chatHeder'>
            { chats.map((item) => (
                <NavLink className={'chatLink'} key={item.id} to={`/message/${item.id}`}>
                    {item.user}
                </NavLink>
            ))}
        </div>
    )
}


export default Chats;