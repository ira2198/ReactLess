import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { ADD_MESSAGE, DELETE_MESSAGE } from "../redux/actions/action";
import { messageSelector} from '../redux/reduces/messages/selectorMessede';



const Messages = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const {idd} = useParams();
    const chatMessages = useSelector (messageSelector);
    const message = chatMessages.filter((message) => {
        if (!idd) return true;

        return message.chatId === Number(idd)
    })
    const delMessage = (id) => {
        dispatch ({type: DELETE_MESSAGE, payload: id})
    }

    const addMessage = ( ) => {
        const random = Math.round(Math.random()*10000);
        let obj = {
            id: random,
            chatId: idd,
            text: content
        }
        dispatch ({ type: ADD_MESSAGE, payload: obj})
     }

    return (
        <div className="messagInpAdd">
            <div className="addMessadeInp"> <textarea name="text" value={content} onChange={(e)=> setContent(e.target.value)} />
            <button onClick={addMessage}>Добавить</button>
            </div>

            {message.map((item) => (
                <div className="messageBlock" key= {item.id}>
                    <div>{item.text}</ div>
                    <button onClick={() => delMessage (item.id)}>
                        X
                    </button>
                </div>
            ))}
        </div>
    )
}



export default Messages;