import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/reduser/useSelector";
import LoadingToRedirect from "./loadingToRedirect";


const ProtectRoutes = ({children}) => {

    const user = useSelector(userSelector);
    if(!user) {
        return <LoadingToRedirect/>
      
    }     
    
    return children
}

export default ProtectRoutes;