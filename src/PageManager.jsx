import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import UserLoginPage from './pages/UserLoginPage';

const PageManager = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onPageChange={handlePageChange} />;
      case 'login':
        return <UserLoginPage onPageChange={handlePageChange} />;
      // Add more cases for other pages as needed
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default PageManager;