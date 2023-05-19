import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const text_center = {
    textAlign: 'center',
  };
  return (
    <div className="glassy-box-container">
      <div className="form-container">
        <h1 style={text_center}>
          404
          <br /> Page Not Found
        </h1>
        <p style={text_center}>The page you are looking for does not exist.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
