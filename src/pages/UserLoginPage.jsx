import React, { useState } from 'react';

const UserLoginPage = ({ onPageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here, e.g., sending login request to the server
    // For demonstration purposes, you can console log the username and password
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <button type="button" onClick={() => onPageChange('welcome')}>Go Back</button>
      <h1>User Login</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
        <p onClick={() => onPageChange('forgot')} style={{ cursor: 'pointer', color: 'blue' }}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default UserLoginPage;