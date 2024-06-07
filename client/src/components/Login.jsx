import React, { useState } from 'react';
import api from '../api/api'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth', { user: username, pwd: password });
      console.log('token', response.data.accessToken);
      setUsername('');
      setPassword('');
      setError('');
      navigate('/');
    } catch (err) {
      if (!err.response) {
        setError('No Server Response');
      } else if (err.response.status === 400) {
        setError('Missing Username or Password');
      } else if (err.response.status === 401) {
        setError('Unauthorized');
      } else {
        setError(err.response.data?.message || 'Login Failed');
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button type='submit'>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
