import React from 'react';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnAuth from './UnauthenticatedRoutes';

export const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

const AppRoutes = () => {

  return (
    <div>
      {isAuthenticated ? <AuthenticatedRoutes /> : <UnAuth />}
    </div>
  );
};

export default AppRoutes;
