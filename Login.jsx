import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://petals.ath.cx/test/login.jsp?username=test&password=test', {
        params: {
          username: username,
          password: password
        }
      });

      const data = response.data;

      if (data.ok) {
        console.log('Login successful!');
      } else {
        setErrorMessage(data.error.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred. Please try again.'); 
    }
  };

  return (
    <div className="login-container">
      <h2 >Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;