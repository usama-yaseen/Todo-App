import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, authProtectedRoutes } from '.';
import Layout from '../components/Layout';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}

      {/* Auth-Protected Routes */}
      {authProtectedRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
