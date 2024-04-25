import React from 'react';

const WelcomePage = ({ onPageChange }) => {
  return (
    <div>
      <h1>KingoGrad</h1>
      <button onClick={() => onPageChange('login')}>Start</button>
    </div>
  );
};

export default WelcomePage;
