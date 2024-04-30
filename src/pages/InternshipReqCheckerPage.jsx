import React from 'react';
import "../styles/InternshipReqCheckerPage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const InternshipReqCheckerPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

    return (
      <div className="internship-req-page">
        <div className="div">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">INTERNSHIP REQUIREMENT CHECKER</div>
            </div>
          </div>
          <img className="kingograd-logo" alt="Kingograd logo" src={logo} />
          <p className="selected-major-MAJOR">
            <span className="span">Selected major:</span>
            <span className="text-wrapper-2"> MAJOR</span>
          </p>
          <div className="text-wrapper-3">Available internship positions</div>
          <div className="text-wrapper-4">Useful links:</div>
          <div className="text-wrapper-5">link1</div>
          <div className="text-wrapper-6">link2</div>
          <div className="text-wrapper-7">link3</div>
          <button className="back-button" onClick={handleGoBack}>
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper-8">Back</div>
            </div>
          </button>
        </div>
      </div>
    );
};

export default InternshipReqCheckerPage;