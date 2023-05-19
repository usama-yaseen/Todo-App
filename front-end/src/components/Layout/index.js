import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
