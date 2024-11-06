// Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api';

import gifImage from '../assets/1.gif';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('JOB_SEEKER');
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ username, email, password, role });
      console.log('Registration Successful', response);
      setMessage({ text: 'Registration Successful! Redirecting to Login...', type: 'success' });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration Failed', error);
      setMessage({ 
        text: error.response?.data || 'Registration Failed. Please Try Again.', 
        type: 'error' 
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2 style={styles.heading}>Create Your Account ✌</h2>
        <p style={styles.subheading}>Join us Today! Please Fill in Your Details.</p>

        {message.text && (
          <p style={{ ...styles.message, color: message.type === 'success' ? 'green' : 'red' }}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="role" style={styles.label}>Role</label>
            <select 
              id="role"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="JOB_SEEKER">Job Seeker</option>
              <option value="COMPANY">Company</option>
            </select>
          </div>

          <button type="submit" style={styles.registerButton}>Register</button>

          <p style={styles.loginPrompt}>
            Already have an account?{' '}
            <Link to="/login" style={styles.loginLink}>
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div style={styles.right}>
        <img src={gifImage} alt="Animated GIF" style={styles.gif} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  left: {
    flex: 1,
    padding: '50px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '10px',
    fontSize: '24px',
  },
  subheading: {
    marginBottom: '30px',
    fontSize: '16px',
    color: '#555',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  registerButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  loginPrompt: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '20px',
  },
  loginLink: {
    color: '#007bff',
    textDecoration: 'underline',
    textDecorationColor: 'blue',
  },
  gif: {
    width: '100%',
    height: 'auto',
  },
};

export default Register;
