import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignupForm from '../components/SignUp';
import LoginForm from '../components/Login';
import Nav from '../components/Nav';
import Loading from '../components/Loading';

const UnAuth = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<Loading />} />
      </Route>
    </Routes>
  )
}

export default UnAuth;
