import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem('email'); 

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AuthGuard;