import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="LoginTemplate">
      <div className="ERUM">ERUM</div>
      <div>
        <div className="LoginId"></div>
        <div className="LoginPassword"></div>
        <div className="LoginButton">LOGIN</div>
        <div className="RegisterButton"> 회원가입 </div>
      </div>
    </div>
  );
};

export default LoginPage;
