import React from 'react';

const RoadMapTrackerPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back Home Page</button>
      <h1>RoadMap Tracker</h1>
      {/* Add your content */}
    </div>
  );
};

export default RoadMapTrackerPage;