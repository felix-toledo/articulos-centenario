import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginContainer(props) {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userTelephone, setUserTelephone] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newName = userName;
      window.$name = newName;
      window.$mail = userMail;
      window.$number = userTelephone;
      props.setName(newName);
      navigate("/");
    };

  return (
    <div className="login-container">
        <div className="logo"></div>
        <div className="login-body">
            <p>No hace falta que te registres!</p>
            <p>Solo necesitamos estos datos</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input required type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    Mail:
                    <input type="text" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
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

export default LoginContainer;