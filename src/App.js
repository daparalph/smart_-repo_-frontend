import React from 'react';
// import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Auth/AuthProvider';
import AppRoutes from './Routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>

  );
};


export default App;
