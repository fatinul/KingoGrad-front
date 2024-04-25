import React from 'react';

const UserLoginPage = ({ onPageChange }) => {
  return (
    <div>
      <h1>User Login</h1>
      {/* Add login form or any other content */}
      <button onClick={() => onPageChange('welcome')}>Go Back</button>
    </div>
  );
};

export default UserLoginPage;