import React from 'react';

const HomePage = ({ onPageChange }) => {
  const handleLogout = () => {
    onPageChange('login'); 
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>HomePage</h1>
      <button onClick={() => onPageChange('roadmap')}>RoadMap Tracker</button>
      <button onClick={() => onPageChange('1000Line')}>1000 Line Project</button>
      <button onClick={() => onPageChange('internshipReqChecker')}>Internship</button>
      <button onClick={() => onPageChange('thesis')}>Thesis</button>
    </div>
  );
};

export default HomePage;