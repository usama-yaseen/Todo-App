import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fields } from './fields';
import { LOGIN } from '../../utils/constants/routes'; // Update the route constant if needed
import '../auth.styles.css';
import { signupApi } from '../../apis/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const response = await signupApi(formData);
    setLoading(false);

    if (response.status === 201) {
      localStorage.setItem('token', response.data.token);
      navigate('/', { replace: true });
    } else {
      setError(
        response.data.message ||
          'Something went wrong. Please try again later.',
      );
    }
  };

  return (
    <div className="glassy-box-container">
      <div className="form-container">
        {error && <div className="error">{error}</div>}
        <h5 className="heading">Signup</h5>
        <form onSubmit={handleSubmit}>
          {fields.map(field => (
            <div key={field.name} className="input-container">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
              />
            </div>
          ))}

          <p className="redirection-link">
            Already have an account? <Link to={LOGIN}>Login</Link>
          </p>

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? <div id="loader"></div> : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
