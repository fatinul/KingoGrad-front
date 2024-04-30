import React, { useState } from 'react';
import "../styles/ForgotPassword.css"
import image1 from '../../assets/email.png';

const ForgotPasswordPage = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const handleGoBack = () => {
    onPageChange('login'); // Navigate back to the login page
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRetrieve = () => {
    // Perform login logic here, e.g., sending login request to the server
    // For demonstration purposes, you can console log the username and password
    console.log("Email:", email);

    // If Pass
    onPageChange('login'); 
  };

  // return (
  //   <div>
  //     <h1>Forgot Password</h1>
  //     {/* Add your content for the forgot password page here */}
  //     <button onClick={handleGoBack}>Go Back to Login</button>
  //   </div>
  // );
  return (
    <div className="forgotPass">
      <div className='title'>
        <h1>Retrieve Password</h1>
      </div>
      <form className="form-container">
        <div className="email">
          <img className="image" src={image1} alt="email" />
          <input
            className='email-input' 
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </form>
      <div className='back'>
        <button className="retrieve-button" type="button" onClick={handleRetrieve}>Retrive</button>
      </div>
      <div className='back-to-login'>
        <p 
          onClick={() => onPageChange('login')} 
        >
          Go Back to Login
        </p>
      </div>

    </div>
  );
};

export default ForgotPasswordPage;