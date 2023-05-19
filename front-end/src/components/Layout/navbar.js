import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { authProtectedRoutes, publicRoutes } from '../../routes';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token'); // Check if the user is logged in based on token presence

  const renderNavLinks = routes =>
    routes.map(route =>
      route.path === '*' ? null : (
        <li key={route.path}>
          <NavLink
            to={route.path}
            className={navData => (navData.isActive ? 'active' : '')}
          >
            {route.name}
          </NavLink>
        </li>
      ),
    );

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {!isLoggedIn
          ? renderNavLinks(publicRoutes)
          : renderNavLinks(authProtectedRoutes)}
      </ul>
    </nav>
  );
};

export default Navbar;
