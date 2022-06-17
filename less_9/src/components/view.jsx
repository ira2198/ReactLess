import React, {useState} from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db as firebaseDB } from "../firebase/firebase";
import '../styles/main.css';
import '../styles/viewTable.css';


const View = ( ) => {
   
    const [user, setUser] = useState({});
   
    const {id} = useParams();
   
    useEffect(() => {
        firebaseDB.child(`contact/${id}`)
            .get()
            .then((data) => {
                if (data.exists()) {
                    setUser({...data.val()})
                } else {
                    setUser({})
            }
        })
    }, [id] )

   
    return (
        <div className="container">
            <div>
                <div className="headerFirst">
                    Дeтальная информация о контакте
                </div>
                <div className="tableView">
                    <div className="cellView">
                        <strong> ID:</strong>
                        <p> {id} </p>
                    </div>
                    <div className="cellView">
                        <strong> Name:</strong>
                        <p> {user.name} </p>
                    </div>
                    <div className="cellView">
                        <strong> E-mail:</strong>
                        <p> {user.email} </p>
                    </div>
                    <div className="cellView">
                        <strong> Phorne:</strong>
                        <p> {user.phone} </p>
                    </div>
                   
                </div>
                <Link to = {'/'}>
                    <button className="btnViewExit">Вернуться</button>
                    </Link>
            </div>

        </div>
    )
}

export default View;