import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  
  const [login, setLogin] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLogin(true);
      setMessage(data.message);
      localStorage.setItem('token', data.token);

      navigate('/welcome');

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="identifier"
        placeholder="Username or Email"
        value={formData.identifier}
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        required
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
      <p>No account? <Link to="/signup">Register</Link></p>
      {login && <p>${message}</p>}
    </form>
  );
};

export default LoginForm;
