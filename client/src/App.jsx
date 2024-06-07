import React, { useState, useEffect } from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './index.css';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <Routes>
        <Route path="/login" element={ <Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/" element={ <Home setLoggedIn={setLoggedIn}/>} />
      </Routes>
    );
};

export default App;
