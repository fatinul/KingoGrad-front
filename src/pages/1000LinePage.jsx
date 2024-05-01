import React from 'react';
import "../styles/1000Line.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const ThousandLinePage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };
  
  return (
    <div className='line-project'>
      <div className='div'>
        <div className='header-color'>
          <div className='title'>
            1000-Line Project
          </div>
        </div>
        <img className="kingograd-logo" alt="Kingograd logo" src={logo} />
        <div className='container'> 
          <div className='left-panel'>
            <p className="element">
              <span className="completed-num">1</span>
              <span className="need-num"> / 2</span>
            </p>
            <div className='incomplete'>Incomplete</div>
          </div>
          <div className='right-panel'>
            <div className='inner-title'>Completed</div>
            <div className='course'>Introduction to Computer Architecture</div>
            <div className='inner-title'>Remaining</div>
            <div className='course'>Introduction to Database</div>
          </div>
        </div>
        <button className="back-button" onClick={handleGoBack}>
          <div className="overlap">
            <div className="rectangle" />
            <div className="text-back">Back</div>
          </div>
        </button>
      </div>  
    </div>
  );
};

export default ThousandLinePage;