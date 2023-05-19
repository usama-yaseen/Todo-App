import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fields } from './fields';
import { SIGNUP } from '../../utils/constants/routes';
import '../auth.styles.css';
import { loginApi } from '../../apis/auth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    const response = await loginApi(formData);
    setLoading(false);

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      navigate('/', { replace: true });
    } else {
      setError('Invalid Credentials');
    }
  };

  return (
    <div className="glassy-box-container">
      <div className="form-container">
        <h5 className="heading">Login</h5>
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

          {error && <div className="error">{error}</div>}
          <p className="redirection-link">
            Don`t have an account? <Link to={SIGNUP}>Create One</Link>
          </p>

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? <div id="loader"></div> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
