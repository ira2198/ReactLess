import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logautInitiate } from "../redux/actions/action";
import { userSelector } from "../redux/reduser/useSelector";
import './styles/header.css'
import './styles/main.css'
import './styles/btn.css'
import './styles/inputs.css'

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector( userSelector );
    const navigate = useNavigate();


    const outputHandler = () => {
       if(user) {
        dispatch(logautInitiate())
        }
        navigate('/login')
    }

    return (
        <div>
           <header className="blockHeader">
                <h2>Главная</h2>
                <button className="btnHeader" onClick={outputHandler}> Bыход</button>
            </header>        
                <main></main>
        </div>
    )
}

export default Home