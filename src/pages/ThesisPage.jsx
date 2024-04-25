import React from 'react';

const ThesisPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back Home Page</button>
      <h1>Thesis Submission</h1>
      {/* Add your content */}
    </div>
  );
};

export default ThesisPage;