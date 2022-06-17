import React from "react";
import { Link, useMatch } from "react-router-dom";


const CustomLink = ({to, children}) => {

    const match = useMatch(to);

    return (
        <Link  className= {match ? 'activeLink' : 'sleepLinks'} to = {to}>
            <p>
                {children}
            </p>
        </Link>
    )
}



export default CustomLink;