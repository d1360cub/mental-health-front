import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const isLogged = false;

  return isLogged ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoutes;
