import React from 'react';

const ThousandLinePage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back Home Page</button>
      <h1>1000 Line Project</h1>
      {/* Add your content */}
    </div>
  );
};

export default ThousandLinePage;