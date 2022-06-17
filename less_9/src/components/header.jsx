import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSelector } from "../redux/reduser/useSelector";
import { logautInitiate } from "../redux/actions/action";
import  CustomLink  from './customlink'; 
import '../styles/header.css';


const Header = () => {

    const user = useSelector (userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerAuth = ( ) => {
        if (user) {
            dispatch(logautInitiate())
        }
        navigate('/login')
    }


    return (
        <header>
            <Link className="mainTitle" to = {'/'} >
                <p>CONTACTS</p>
            </Link>
            <div className="linkHeaderBlok" >
                <CustomLink to = {'/'} > Home </CustomLink>
                <CustomLink to = {'/addContacts'} >Add contact</CustomLink>
                <CustomLink to = {'/About'}>About</CustomLink>
                { user? (
                    <div className="sleepLinks"  onClick={handlerAuth}> Go out</div>
                ) :(
                    <CustomLink className="sleepLinks" to = {'/login'}> sign in</CustomLink>
                )            }
            </div>
          
        </header>

    )
}



export default Header;

