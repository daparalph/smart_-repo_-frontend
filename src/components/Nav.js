import React from 'react';
// import jwt from 'jsonwebtoken';
// import crypto from 'crypto-browserify';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './styles/nav.module.scss';
import { isAuthenticated } from '../Routes/AppRoutes';
// import { FaUserCircle } from 'react-icons/fa';

const Nav = () => {
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   // Get the JWT from your authentication mechanism (e.g., from localStorage or a cookie)
  //   const token = localStorage.getItem('token'); // Replace with how you store your token
  //   const secretKey = process.env.REACT_APP_SECRET_KEY;

  //   if (token) {
  //     try {
  //       // Decode the JWT to extract the payload
  //       const decoded = jwt.verify(token, secretKey);
  //       console.log(decoded);

  //       // Access the username value from the payload
  //       const { username } = decoded;

  //       // Set the username in your component state
  //       setUsername(username);
  //     } catch (error) {
  //       console.error('Error decoding JWT:', error);
  //     }
  //   }
  // }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    isAuthenticated = false;
    navigate('/'); // Navigate back to login page
  };

  return (
    <>
    <header className={`${styles.header}`}>
      <div className={`${styles.navbar}`}>
        <NavLink className={`${styles.logo}`} to="/welcome">SmartRepo</NavLink>
          <nav className={`${styles.flex}`}>
            { isAuthenticated && (
              <NavLink className="" to="/welcome">Home</NavLink>
            )}
            { isAuthenticated ? (
              <NavLink className={`${styles.block}`} onClick={handleLogout} to="/">Log out</NavLink>
            ) : (
              <NavLink className={`${styles.block}`} to="/login">Log in</NavLink>
            )}
            { !isAuthenticated && (
              <NavLink className={`${styles.block}`} to="/signup">Register</NavLink>
            )}
          </nav>
      </div>
    </header>
    <Outlet />
    </>
  )
}

export default Nav;

// { isAuthenticated && (
//   <div className={`${styles.blocker}`}>
//     <p className={`${styles.block}`}>{username}</p>  
//     <FaUserCircle className={`${styles.pointer}`}/>
//   </div>
// )}
