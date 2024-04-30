import React from 'react';

const ThousandLinePage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

  // return (
  //   <div>
  //     <button onClick={handleGoBack}>Go Back Home Page</button>
  //     <h1>1000 Line Project</h1>
  //     {/* Add your content */}
  //   </div>
  // );
  return (
    <div className="element-line-project">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">1000-Line Project</div>
          </div>
        </div>
        <img className="kingograd-logo" alt="Kingograd logo" src="kingograd-logo-removebg-preview-1.png" />
        <div className="text-wrapper-2">Completed</div>
        <div className="text-wrapper-3">Remaining</div>
        <div className="text-wrapper-4">Incomplete</div>
        <button className="back-button">
          <div className="overlap">
            <div className="rectangle" />
            <div className="text-wrapper-5">Back</div>
          </div>
        </button>
        <p className="introduction-to">
          <span className="span">Introduction to Computer Architecture </span>
          <span className="text-wrapper-6">
            A<br />
          </span>
          <span className="span">
            <br />
          </span>
        </p>
        <div className="text-wrapper-7">Introduction to Database</div>
        <p className="element">
          <span className="text-wrapper-8">1</span>
          <span className="text-wrapper-9"> / 2</span>
        </p>
      </div>
    </div>
  );
};

export default ThousandLinePage;