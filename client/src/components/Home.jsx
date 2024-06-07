
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setLoggedIn }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className='home-container'>
      <h2>Welcome</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
