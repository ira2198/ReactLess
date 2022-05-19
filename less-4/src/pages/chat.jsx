import React from "react";
import {useState,} from 'react';
import './chatStyle.css';


function Chat () {

    const [messegeList, setMessegeList] = useState ([]);
    const [messege, setMessege] = useState('');
    const [user, setUser ] = useState('');
            
    const addMessege = () => {
            let randomId = (Math.floor( Math.random() * 1000) + 1);
            setMessegeList(prevState =>[...prevState, { 
                messege: messege, user: user, id: randomId }])
                console.log(messegeList)           
        };


     function delMessege (id) {
         setMessegeList(messegeList.filter(mess => mess.id !== id))
     } 
       
        return (  
            <div className='contain'>
                <h2 className="header">Рабочий чат</h2>
                < div className='block'>   
                    {messegeList.map((mess)=>{        
                        return(
                                                           
                            <div className='messegeBlock' key={mess.id} >
                                <div style={{marginRight: "2rem"}} className="elemMess"> {mess.user}</div>
                                <div className="elemMess"> {mess.messege}</div>
                                <button className="delBtn" onClick={() => delMessege(mess.id)}>&times;</button>
                                                           
                            </div>
                              
                             )
                         })}
                </ div>
                <div className='inputBlock'>  
                     <div className='input'>
                         < textarea placeholder="введите сообщение" style={{ minWidth:'400px', height: "80px"}} className='inp' name="messege" value={messege} onChange = {(e)=>setMessege(e.target.value)} />
                         < input placeholder="введите имя получателя"className='inp' name="name" value={user} onChange = {(e)=>setUser(e.target.value)} />
                         < button className="addBtn" onClick={addMessege}>Добавить</button>              
                    </div>  
                                          
                      
                 </div>
                
            </div>  
        )
    
    

}

export default Chat