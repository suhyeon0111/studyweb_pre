import React from 'react';
// import LoginPage from './components//LoginPage/LoginPage';
import LoginTemplate from './components/LoginPage/LoginTemplate';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { Link } from 'react-router-dom';
import './App.css';

document.body.style.background = '#f0faee';

const App = () => {
    return (
      <>
      {/* <Link to='/login'>
        <button>LoginPage</button>
      </Link>
      <Link to='/register'>
        <button>RegisterPage</button>
      </Link>
      <Link to='/calendar'>
        <button>RegisterPage</button>
      </Link> */}
      <LoginTemplate>

      </LoginTemplate>
      </>
    ) ;
}

export default App;
