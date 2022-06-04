import React, { useState } from 'react';
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
          <Route path="/plan" element={<TimePage />} />
          <Route path="/report" element={<AddtimePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
