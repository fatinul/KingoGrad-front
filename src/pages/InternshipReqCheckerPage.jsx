import React from 'react';
import "../styles/InternshipReqCheckerPage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const InternshipReqCheckerPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };
  return (
    <div className='internship-req-page'>
      <div className='content'>
        <div className='header'>
          <h1>INTERNSHIP REQUIREMENT CHECKER</h1>
        </div>
        <div className='body'>
          <div className='logo-container'>
            <img src={logo} className='logo' alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipReqCheckerPage;