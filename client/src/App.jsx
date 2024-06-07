import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import './index.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('Loggedin') === 'true';
    setLoggedIn(isLoggedIn);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setUser(localStorage.getItem('user'));
    }
  }, [loggedIn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={loggedIn ? <Home setLoggedIn={setLoggedIn} user={user} /> : <Navigate to="/login" />}/>
      </Route>

      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/" /> : <Login setLoggedIn={setLoggedIn} setUser={setUser} />}
      />
    </Routes>
  );
};

export default App;
