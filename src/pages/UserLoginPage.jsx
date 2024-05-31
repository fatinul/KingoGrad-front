import React, { useState } from 'react';
import "../styles/LoginForm.css";
import image1 from '../../assets/user.png'; // Import the image file
import image2 from '../../assets/pass.png'; // Import the image file

const UserLoginPage = ({ onPageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle registration mode
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to show confirm password input

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (isRegistering) {
      setIsRegistering(false);
      setShowConfirmPassword(false);
      return;
    }

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.text();
      if (response.ok) {
        console.log('Login successful:', data);
        onPageChange('home');  // Redirect to home page or dashboard after login
      } else {
        alert(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error: ' + error.message);
    }
  };

  const handleRegister = async () => {
    if (!showConfirmPassword) {
      setShowConfirmPassword(true); // Show confirm password input field
      setIsRegistering(true);
      return;
    }

    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.text();  // Assumes the response is in JSON format
        if (response.ok) {
            console.log('Registration successful:', data);
            alert('Registration successful! Please log in.'); // Alert for successful registration
            onPageChange('login');  // Or 'home' if you want to log them in directly
        } else {
            alert(data.message || 'Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Registration error: ' + error.message);
    }
  };

  return (
    <div className="login">
      <button className="button" onClick={() => onPageChange('welcome')}>Go Back</button>
      <div className='title'>
        <h2>User Login / Register</h2>
      </div>
      
      <form className="form-container">
        <div className='username'>
          <img className="image" src={image1} alt="user" />
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='password'>
          <img className="image" src={image2} alt="pass" />
          <input
            className='input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {showConfirmPassword && (
          <div className='password'>
            <img className="image" src={image2} alt="pass" />
            <input
              className='input'
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        )}
        <div className='login-button-div'>
          <button className="login-button" type="button" onClick={handleLogin}>Login</button>
          <button className="register-button" type="button" onClick={handleRegister}>Register</button>
          <p className='forgot-text' onClick={() => onPageChange('forgot')}>
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserLoginPage;
