import React from 'react';
import "../styles/WelcomePage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';
import loginlogo from '../../assets/PersonCircle.png';
import ingoGrad from '../../assets/ingoGrad.png';

const WelcomePage = ({ onPageChange }) => {
  const handleScrollDown = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({ top: screenHeight, behavior: 'smooth' });
  }

  return (
    <div className='welcome-page'>
      <div className='login-div'>
        <button className="login-button"onClick={() => onPageChange('login')}>
           <img className="person-circle" alt="Person circle" src={loginlogo} />
            <div className="login-text">Login</div>
         </button>
      </div>
      <div className='title-div'>
        <img className='ingograd-logo' src={ingoGrad} alt="title" />
      </div>
    </div>
  );
};

export default WelcomePage;
