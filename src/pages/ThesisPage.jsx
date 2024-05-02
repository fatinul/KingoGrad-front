import React from 'react';
import "../styles/ThesisPage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';
import checkIcon from '../../assets/checkIcon.png'; 
import crossIcon from '../../assets/crossIcon.png';

const ThesisPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

  return (
    <div className='thesis'>
      <div className='div'>
        <div className='header-color'>
          <div className='title'>
            Thesis Submission
          </div>
        </div>
        <img className="kingograd-logo" alt="Kingograd logo" src={logo} />
        <div className="submission-grid">
          {submissionStages.map((stage, index) => (
            <div key={index} className={`submission-item ${stage.status}`}>
              <img src={stage.status === 'complete' ? checkIcon : crossIcon} alt={stage.status} />
              <div className='stage-info'>
                <div className="stage-name">{stage.name}</div>
                <div className="semester">{stage.semester}</div>
              </div>
              
            </div>
          ))}
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

// Sample data for thesis stages
const submissionStages = [
  { name: 'Advisor Application', semester: '6th semester', status: 'complete' },
  { name: 'Proposal Submission', semester: '7th semester', status: 'incomplete' },
  { name: 'Mid Report Submission', semester: '8th semester', status: 'incomplete' },
  { name: 'Final Report Submission', semester: '8th semester', status: 'incomplete' },
  { name: 'Evaluation of Professor', semester: '8th semester', status: 'incomplete' },
  { name: 'Final Presentation', semester: '8th semester', status: 'incomplete' },
];

export default ThesisPage;
