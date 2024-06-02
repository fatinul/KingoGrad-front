import React, { useEffect, useState } from 'react';
import "../styles/HomePage.css";
import photo from '../../assets/PersonCircle.png';
import logo from '../../assets/kingograd_logo-removebg-preview.png';

const HomePage = ({ onPageChange }) => {
  const [userData, setUserData] = useState({
    username: '',
    studentid: '',
    major: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched user data:', data); // Debugging log
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
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
                  <tbody>
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
                  </tbody>
                </table>
                
                <div className='total'>
                  <table>
                    <tbody>
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
                    </tbody>
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
            <h3>{userData.username}</h3>
            <p>{userData.studentid}</p>
            <p>{userData.major}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
