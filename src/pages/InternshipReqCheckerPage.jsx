import React from 'react';
import "../styles/InternshipReqCheckerPage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const InternshipReqCheckerPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };
  return (
    <div className='internship-req-page'>
      <div className='content'>
        <div className='header'>
          <h1>INTERNSHIP REQUIREMENT CHECKER</h1>
        </div>
        <div className='body'>
          <div className='logo-container'>
            <img src={logo} className='logo' alt="logo" />
          </div>
          <div className='major'>
            <h1>Selected major: Major</h1> 
            <div className='text1'>Available internship position</div>
          </div>
          <div className='table'>
            <table>
              <tr>
                <th>Position</th>
                <th>Company</th>
                <th>Requirements</th>
                <th>Link ot Application</th>
                <th>Deadline</th>
              </tr>
              <tr>
                <td>
                  Position1
                </td>
                <td>
                  Comp1
                </td>
                <td>
                  <div className='Req1' onClick={() => onPageChange('description')}>
                    <div className='text-req1'>Req1</div>
                  </div>
                </td>
                <td>
                  Link1
                </td>
                <td>
                  D1
                </td>
              </tr>
              <tr>
                <td>
                  Position2
                </td>
                <td>
                  Comp2
                </td>
                <td>
                <div className='Req2' onClick={() => onPageChange('description')}>
                    <div className='text-req2'>Req2</div>
                  </div>
                </td>
                <td>
                  Link2
                </td>
                <td>
                  D2
                </td>
              </tr>
              <tr>
                <td>
                  Position3
                </td>
                <td>
                  Comp3
                </td>
                <td>
                <div className='Req3' onClick={() => onPageChange('description')}>
                    <div className='text-req3'>Req3</div>
                  </div>
                </td>
                <td>
                  Link3
                </td>
                <td>
                  D3
                </td>
              </tr>
            </table>
            <div className='links'>Useful links:</div>
            <div className="link1">link1</div>
            <div className="link2">link2</div>
            <div className="link3">link3</div>
            <button className='back-button' onClick={handleGoBack}>
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-back">Back</div>
            </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipReqCheckerPage;