// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './index.css';

const App = () => {


  return (

      <Routes>
        <Route path="/login" element={ <Login  />} />
        <Route path="/" element={ <Home />} />
      </Routes>

  );
};



export default App;
