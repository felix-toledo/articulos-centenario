import React from "react";
import LoginContainer from '../containers/LoginContainer';


const WelcomeLogin = (props) => {
  return (
    <div className="welcome-body">
      <LoginContainer setName={props.setName} />
    </div>
  );
};

export default WelcomeLogin;