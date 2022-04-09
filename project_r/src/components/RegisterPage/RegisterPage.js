import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="LoginTemplate">
      <div className="ERUM">ERUM</div>
      <div>
        <div className="LoginId">
          <BsFillPersonFill className="icon-ID" size="33" color="#17a934" />
        </div>
        <div className="LoginPassword_1">
          <FaLock className="icon-Password" size="33" color="#17a934" />
        </div>
        <div className="LoginPassword_2">
          <FaLock className="icon-Password" size="33" color="#17a934" />
        </div>
        <div className="LoginButton">LOGIN</div>
      </div>
    </div>
  );
};

export default RegisterPage;
