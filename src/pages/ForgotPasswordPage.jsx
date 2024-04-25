import React from 'react';

const ForgotPasswordPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('login'); // Navigate back to the login page
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      {/* Add your content for the forgot password page here */}
      <p>Content for the Forgot Password page...</p>
      <button onClick={handleGoBack}>Go Back to Login</button>
    </div>
  );
};

export default ForgotPasswordPage;