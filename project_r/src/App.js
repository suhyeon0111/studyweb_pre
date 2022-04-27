import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import MainPage from './components/MainPage/MainPage';
import AddtimePage from './components/AddtimePage/AddtimePage';
import TimePage from './components/TimePage/TimePage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

document.body.style.background = '#f0faee';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addtime" element={<AddtimePage />} />
          <Route path="/time" element={<TimePage/>} />

          {/* <Route
            render={({ location }) => {
              <div>
                <h1> 존재하지 않는 페이지입니다:</h1>
                <p>{location.pathname}</p>
              </div>;
            }}
          /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
