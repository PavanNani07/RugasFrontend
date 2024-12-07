import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router v6+
import { loginUser } from '../api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('admin'); // Default role
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !role) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    loginUser({ email, role })
      .then((response) => {
        console.log('API Response:', response); // Debug API response
        const { token } = response.data;

        // Store JWT token in localStorage
        localStorage.setItem('token', token);
        console.log(token, "successful");

        // Navigate based on role
        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/employee');
        }
      })
      .catch((error) => {
        console.error('Login Error:', error); // Log error for debugging
        setErrorMessage(error.response?.data?.message || 'Invalid credentials');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};


export default LoginPage;