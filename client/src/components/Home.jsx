import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setLoggedIn,user }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('Loggedin');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className='home-container'>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
