import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // remove the token from the cookies completely key and value both
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
