import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const LoadingToRedirect = () => {

    const [counter, setCounter] = useState(6);
    const navigate = useNavigate();

    useEffect ( () => {
        const interval = setInterval( () => {
            setCounter( (currentCounter) => --currentCounter )
        }, 1000 ) 
       counter === 0 && navigate('/login');
        return () => clearInterval(interval)
    }, [counter, navigate])


    return (
        <div>
          <p> Вы будете перенаправлены через {counter}.</p> 
        </div>
    )
}




export default LoadingToRedirect;