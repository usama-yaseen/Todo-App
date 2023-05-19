import React from 'react';
import Login from '../pages/login';
import * as routePaths from '../utils/constants/routes';
import Signup from '../pages/signup';
import NotFound from '../pages/404';
import Home from '../pages/Home';
import Logout from '../pages/logout';

export const publicRoutes = [
  {
    name: 'Login',
    path: routePaths.LOGIN,
    element: <Login />,
  },
  {
    name: 'Signup',
    path: routePaths.SIGNUP,
    element: <Signup />,
  },
  // Add 404 page
  {
    name: '404',
    path: '*',
    element: <NotFound />,
  },
];

export const authProtectedRoutes = [
  {
    name: 'TODO',
    path: routePaths.HOME,
    element: <Home />,
  },
  // logout route
  {
    name: 'Logout',
    path: routePaths.LOGOUT,
    element: <Logout />,
  },
];
