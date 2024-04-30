import React, { useState } from 'react';
import "../styles/LoginForm.css"
import image1 from '../../assets/user.png'; // Import the image file
import image2 from '../../assets/pass.png'; // Import the image file

const UserLoginPage = ({ onPageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here, e.g., sending login request to the server
    // For demonstration purposes, you can console log the username and password
    console.log("Username:", username);
    console.log("Password:", password);

    // If Pass
    onPageChange('home'); 
  };

  return (
    <div className="container">
      <button type="button" onClick={() => onPageChange('welcome')}>Go Back</button>
      <h1>User Login</h1>
      <form>
        <div>
          <img className="user" src={image1} alt="user" />
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <img className="pass" src={image2} alt="pass" />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="button" type="button" onClick={handleLogin}>Login</button>
        <p onClick={() => onPageChange('forgot')} style={{ cursor: 'pointer', color: 'blue' }}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default UserLoginPage;

// import React, { useState } from 'react';
// import "../styles/LoginForm.css"
// import image1 from '../../assets/user.png'; // Import the image file
// import image2 from '../../assets/pass.png'; // Import the image file


// const LoginForm = ({ onLogin, onForgotPassword }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (username === 'user' && password === 'pass') {
//       onLogin(true);
//     } else {
//       alert('Incorrect username or password!');
//       onLogin(false);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>User Login</h2>     
      
//       <form onSubmit={handleSubmit}>
//         <div>
//           <img className="user" src={image1} alt="user" />
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//         <img className="pass" src={image2} alt="pass" />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </div>
//         <button className="button">Login</button>

//         <button className="forgot-password" onClick={onForgotPassword}>Forgot password?</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;