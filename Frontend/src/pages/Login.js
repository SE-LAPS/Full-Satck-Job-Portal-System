import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/api';

import gifImage from '../assets/2.gif';
import facebookIcon from '../assets/f.png';
import twitterIcon from '../assets/t.png';
import githubIcon from '../assets/gi.png';
import googleIcon from '../assets/g.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check for admin login
      if (username === 'admin' && password === 'admin123') {
        const adminData = { username: 'admin', role: 'ADMIN' };
        localStorage.setItem('user', JSON.stringify(adminData));
        window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: adminData }));
        setMessage({ text: 'Admin Login Successful! Redirecting...', type: 'success' });
        setTimeout(() => {
          navigate('/admin_dashboard');
        }, 2000);
        return;
      }

      // Regular user login
      const response = await login(username, password);
      console.log('Full login response:', response);

      if (response && response.data) {
        const userData = response.data;
        console.log('User data:', userData);

        if (userData.username && userData.role) {
          localStorage.setItem('user', JSON.stringify(userData));
          window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: userData }));
          setMessage({ text: 'Login Successful! Redirecting...', type: 'success' });

          setTimeout(() => {
            if (userData.role === 'COMPANY') {
              navigate('/dashboard');
            } else {
              navigate('/home');
            }
          }, 2000);
        } else {
          console.error('Invalid user data:', userData);
          throw new Error('Invalid user data received');
        }
      } else {
        console.error('Invalid response:', response);
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Login Failed', error);
      setMessage({
        text: error.message || 'Invalid Username or Password. Please Try Again.',
        type: 'error'
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src={gifImage} alt="Animated GIF" style={styles.gif} />
      </div>

      <div style={styles.right}>
        <h2 style={styles.heading}>Welcome to Job-Hunter 👋</h2>
        <p style={styles.subheading}>Please Sign in to Your Account and Start the Adventure</p>

        {message.text && (
          <p style={{ ...styles.message, color: message.type === 'success' ? 'green' : 'red' }}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email or Username</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email or Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formOptions}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me" style={styles.rememberLabel}>Remember me</label>
            </div>
            <Link to="/forgot-password" style={styles.forgotPasswordLink}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" style={styles.loginButton}>Login</button>

          <p style={styles.registerPrompt}>
            New on our platform?{' '}
            <Link to="/register" style={styles.registerLink}>
              Create an Account
            </Link>
          </p>

          <div style={styles.divider}>
            <span style={styles.line}></span>
            <span style={styles.orText}>or</span>
            <span style={styles.line}></span>
          </div>

          <div style={styles.socialLogin}>
            <a href="https://facebook.com" style={styles.socialLink}>
              <img src={facebookIcon} alt="Facebook" style={styles.socialIcon} />
            </a>
            <a href="https://twitter.com" style={styles.socialLink}>
              <img src={twitterIcon} alt="Twitter" style={styles.socialIcon} />
            </a>
            <a href="https://github.com" style={styles.socialLink}>
              <img src={githubIcon} alt="GitHub" style={styles.socialIcon} />
            </a>
            <a href="https://google.com" style={styles.socialLink}>
              <img src={googleIcon} alt="Google" style={styles.socialIcon} />
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  left: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: '100%',
    height: 'auto',
  },
  right: {
    flex: 1,
    padding: '50px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
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
  message: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '14px',
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
  formOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  rememberLabel: {
    marginLeft: '3px',
    fontSize: '14px',
    display: 'inline-block',
  },
  forgotPasswordLink: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
  loginButton: {
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
  registerPrompt: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '20px',
  },
  registerLink: {
    color: '#007bff',
    textDecoration: 'underline',
    textDecorationColor: 'blue',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#ccc',
  },
  orText: {
    margin: '0 10px',
    fontSize: '14px',
    color: '#555',
  },
  socialLogin: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  socialLink: {
    display: 'inline-block',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
  },
};

export default Login;
