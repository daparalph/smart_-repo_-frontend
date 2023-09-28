import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../Auth/instance';
import styles from './styles/login.module.scss';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await instance.post('/signup', { username, email, password });
      setMessage('Account created successfully!');

      // Clear the notification message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
      navigate("/login");
    } catch (error) {
      setMessage('Ouch! Something went wrong.');

      // Clear the notification message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };
    return (
    <form onSubmit={handleSignup} className={`${styles.form}`}>
      <h1>Welcome!</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      <p>Already have an account?</p>
      <Link to="/login">Log In</Link>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignupForm;
