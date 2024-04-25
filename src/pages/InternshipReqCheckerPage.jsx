import React from 'react';

const InternshipReqCheckerPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back Home Page</button>
      <h1>Internship Requirements Checker</h1>
      {/* Add your content */}
    </div>
  );
};

export default InternshipReqCheckerPage;