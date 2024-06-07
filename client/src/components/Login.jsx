import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({ setLoggedIn }) => {
  

  
  return (
    <form className="login-form" >
      <h2>Login</h2>
      <input 
        type="text" 
        value="" 
        onChange={()=>{}} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value=""
        onChange={()=>{}} 
        placeholder="Password" 
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
