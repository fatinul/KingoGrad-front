import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import UserLoginPage from './pages/UserLoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RoadMapTrackerPage from './pages/RoadMapTrackerPage';
import HomePage from './pages/HomePage';
import InternshipReqPage from './pages/InternshipReqPage';
import InternshipReqCheckerPage from './pages/InternshipReqCheckerPage';
import ThesisPage from './pages/ThesisPage';
import ThousandLinePage from './pages/1000LinePage';
import RequirementDesc from './pages/RequirementDesc';

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
      case 'forgot':
        return <ForgotPasswordPage onPageChange={handlePageChange} />;
      case 'roadmap':
        return <RoadMapTrackerPage onPageChange={handlePageChange} />;
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'internshipReqChecker':
        return <InternshipReqCheckerPage onPageChange={handlePageChange} />;
      case 'thesis':
        return <ThesisPage onPageChange={handlePageChange} />;
      case '1000Line':
        return <ThousandLinePage onPageChange={handlePageChange} />;
      case 'description':
        return <RequirementDesc onPageChange={handlePageChange} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default PageManager;