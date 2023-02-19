import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function ItemListContainer() {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userTelephone, setUserTelephone] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Name:', userName);
        console.log('User Mail:', userMail);
        console.log('User Telephone:', userTelephone);
        navigate('/');
    }

  return (
    <div className="login-container">
        <div className="logo"></div>
        <div className="login-body">
            <p>No hace falta que te registres!</p>
            <p>Solo necesitamos estos datos</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    Mail:
                    <input type="email" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
                </label>
                <label>
                    Número de telefono:
                    <input type="tel" value={userTelephone} onChange={(e) => setUserTelephone(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default ItemListContainer;