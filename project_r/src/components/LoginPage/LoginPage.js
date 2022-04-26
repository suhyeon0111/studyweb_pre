import React from 'react';
import './LoginPage.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="LoginTemplate">
      <div className="ERUM">ERUM</div>
      <div>
        <div className="LoginId">
          <BsFillPersonFill className="icon" size="31" color="#17a934" />
        </div>
        <div className="LoginPassword">
          <FaLock className="icon" size="31" color="#17a934" />
        </div>
        <button className="LoginButton">LOGIN</button>
        <div className="RegisterButton"> 회원가입 </div>
      </div>
    </div>
  );
};

export default LoginPage;
