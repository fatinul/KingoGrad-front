import React from 'react';
import "../styles/WelcomePage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';
import loginlogo from '../../assets/PersonCircle.png';

const WelcomePage = ({ onPageChange }) => {
  const handleScrollDown = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({ top: screenHeight, behavior: 'smooth' });
  }

  return (
    <div className="welcome-page">
      <div className="div">
        <div className="text-wrapper">SUNGKYUNKWAN UNIVERSITY</div>
        <img className="kingograd-logo" alt="Kingograd logo" src={logo} />
        <div className="kingograd-text">ingoGrad</div>
        <button className="learn-more-button">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="text-wrapper-2">Learn More</div>
            </div>
            </button>
            <button className="login-button"onClick={() => onPageChange('login')}>
              <div className="overlap">
                <div className="text-wrapper-3">Login</div>
                <img className="person-circle" alt="Person circle" src={loginlogo} />
                </div>
                </button>
                </div>
                </div>
                );
              };

export default WelcomePage;
