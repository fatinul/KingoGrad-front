import React from 'react';
import "../styles/HomePage.css"
import photo from '../../assets/PersonCircle.png';
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const HomePage = ({ onPageChange }) => {
  const handleLogout = () => {
    onPageChange('login'); 
  };

  return (
    <div className='homepage'>
      <div className='content'>
        <div className='header'>
          <h1>HOMEPAGE</h1>
        </div>
        <div className='body'>
          <div className='logo-container'>
            <img src={logo} className='logo' alt="logo" />
          </div>
          <div className='info'>
            <div className='menu'>
              <button onClick={() => onPageChange('roadmap')}>RoadMap Tracker</button>
              <button onClick={() => onPageChange('1000Line')}>1000 Line Project</button>
              <button onClick={() => onPageChange('internshipReqChecker')}>Internship</button>
              <button onClick={() => onPageChange('thesis')}>Thesis</button>
            </div>
            <div className='stats'>
              <div>
                <table>
                  <tr>
                    <td>MAJOR</td>
                    <td><meter value="4" min="0" max="21"></meter></td>
                    <td>4/21</td>
                  </tr> 
                  <tr>
                    <td>MAJOR CORE</td>
                    <td><meter value="15" min="0" max="33"></meter></td>
                    <td>15/33</td>
                  </tr> 
                  <tr>
                    <td>EXPERIMENT</td>
                    <td><meter value="2" min="0" max="2"></meter></td>
                    <td>2/2</td>
                  </tr> 
                  <tr>
                    <td>HUMANITY</td>
                    <td><meter value="22" min="0" max="29"></meter></td>
                    <td>22/29</td>
                  </tr> 
                  <tr>
                    <td>BSM</td>
                    <td><meter value="18" min="0" max="18"></meter></td>
                    <td>18/18</td>
                  </tr> 
                  <tr>
                    <td>LIBERAL ARTS</td>
                    <td><meter value="6" min="0" max="6"></meter></td>
                    <td>6/6</td>
                  </tr> 
                </table>
                
                <div className='total'>
                  <table>
                    <tr>
                      <td>Total:</td>
                      <td>130</td>
                    </tr>
                    <tr>
                      <td>Completed:</td>
                      <td>69</td>
                    </tr>
                    <tr>
                      <td>Credit Left:</td>
                      <td>46</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='profile'>
        <button onClick={handleLogout} className='logout-button'>Logout</button>
        <div className='profile-info'>
          <div>
            <img src={photo} alt="user-image" />
            <h3>Name</h3>
            <p>2022313311</p>
            <p>Software Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;