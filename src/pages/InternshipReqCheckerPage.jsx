import React from 'react';
import "../styles/InternshipReqCheckerPage.css"
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const InternshipReqCheckerPage = ({ onPageChange }) => {
  const handleGoBack = () => {
    onPageChange('home'); 
  };

    return (
      <div className="internship-req-page">
        <div className="internshipreq-div">
        <img className="kingograd-logo" alt="Kingograd logo" src={logo} />
            <div className="overlap-group">
              <div className="text-wrapper">INTERNSHIP REQUIREMENT</div>
            </div>
          <p className="selected-major-MAJOR">
            <span className="span">Selected major:</span>
            <span className="text-wrapper-2"> MAJOR</span>
          </p>
          <div className="text-wrapper-3">Available internship positions</div>
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
                  Req1
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
                  Position1
                </td>
                <td>
                  Comp1
                </td>
                <td>
                  Req1
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
                  Position1
                </td>
                <td>
                  Comp1
                </td>
                <td>
                  Req1
                </td>
                <td>
                  Link1
                </td>
                <td>
                  D1
                </td>
              </tr>
            </table>
          </div>
          <div className="text-wrapper-4">Useful links:</div>
          <div className="text-wrapper-5">link1</div>
          <div className="text-wrapper-6">link2</div>
          <div className="text-wrapper-7">link3</div>
          <button className="back-button" onClick={handleGoBack}>
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper-8">Back</div>
            </div>
          </button>
        </div>
      </div>


      // <div className="internship-req-page">
      //   <div className="internshipreq-div">
      //   {/* <h1 className="big-title">INTERNSHIP REQUIREMENT CHECKER</h1>
      //     <img className="kingologo" src={logo} alt="kingologo" /> */}
      //     <h1>
      //     <img className="kingologo" src={logo} alt="kingologo" />
      //     <h2 className="big-title">INTERNSHIP REQUIREMENT CHECKER</h2>
      //     </h1>
      //   </div>
      // </div>
    )
};

export default InternshipReqCheckerPage;