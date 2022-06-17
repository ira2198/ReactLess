import React, { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import { db as firebaseDB } from '../firebase/firebase';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.css';
import '../styles/btn.css';
import '../styles/tableContacts.css';



const Home = () => {
   
     const [data, setData] = useState ({});

    
    useEffect (() => {
        firebaseDB.child('contact').on('value', (snapshot) => {
            if (snapshot.val() !== null) {
                setData({...snapshot.val()})
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [] )


    const delContact = (id) => {
        if (window.confirm(' Вы уверены, что хотите удалить контакт ')) {
            firebaseDB.child( `contact/${id}`).remove((err) => {
                if(err) {
                    toast.error(err)
                } else {
                    toast.success('Успешное удаление')
                }
            })
        }

    }

    

    return (
        <div className="container" > 
            <div > 
                    <div className="headerFirst">ВАШИ КОНТАКТЫ</div> 
            </div>
            <div  className="table">          
                <div className="tablePosition">
                    <div className="cellTableHeader">No</div>
                    <div className="cellTableHeader">Name</div>
                    <div className="cellTableHeader">Email</div>
                    <div className="cellTableHeader">Phone</div>
                    <div className="cellTableHeader">Action</div>
                </div>               
                    {Object.keys(data).map((id, index) => {
                            return (
                                <div key={id} className="tablePosition">
                                    <div className="cellTableBody"> {index + 1} </div>
                                    <div className="cellTableBody"> {data[id].name} </div>
                                    <div className="cellTableBody"> {data[id].email} </div>
                                    <div className="cellTableBody"> {data[id].phone} </div>
                                    <div className="cellTableBody"> 
                                    <Link to = {`/update/${id}`}>
                                        <button className=" btn btnChange">Изменить</button>
                                    </Link>
                                    <button className=" btn btnDelete" onClick={() => delContact(id)}>Удалить</button>
                                    <Link to = {`/view/${id}`}>
                                        <button className=" btn btnView">Открыть</button>
                                    </Link>
                                    </div>
                                </div>
                            )
                        })
                    }              
                <ToastContainer/>
            </div>
        </div>
    )
}

export default Home