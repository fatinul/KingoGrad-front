import React from 'react';

const WelcomePage = ({ onPageChange }) => {
  const handleScrollDown = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({ top: screenHeight, behavior: 'smooth' });
  }

  return (
    <div>
      <button onClick={() => onPageChange('login')}>Login</button>
      <h1>KingoGrad</h1>
      <button onClick={handleScrollDown}>Learn More</button>
    </div>
  );
};

export default WelcomePage;
