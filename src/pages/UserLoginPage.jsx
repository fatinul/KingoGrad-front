import React, { useState } from 'react';
import "../styles/LoginForm.css"
import image1 from '../../assets/user.png'; // Import the image file
import image2 from '../../assets/pass.png'; // Import the image file

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

    // If Pass
    onPageChange('home'); 
  };

  return (
    <div className="login">
      <button className="button" onClick={() => onPageChange('welcome')}>Go Back</button>
      <div className='title'>
        <h2>User Login</h2>
      </div>
      
      <form className="form-container">
        <div className='username'>
          <img className="image" src={image1} alt="user" />
          <input
            className="username-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='password'>
          <img className="image" src={image2} alt="pass" />
          <input
            className='="password-input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='login-button-div'>
          <button className="login-button" type="button" onClick={handleLogin}>Login</button>
          <p 
            className='forgot-text' onClick={() => onPageChange('forgot')} 
          >
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
 };

export default UserLoginPage;