import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/TopNav.css';
import logoImage from '../assets/companyLogos/2.png';
import defaultAvatar from '../assets/default-avatar.png'; 

const TopNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = () => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        try {
          const parsedUser = JSON.parse(loggedInUser);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing user data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
  
    checkUserLoggedIn();
  
    // Listen for storage events to update the state when localStorage changes
    window.addEventListener('storage', checkUserLoggedIn);
  
    // Custom event listener for login
    const handleUserLoggedIn = (event) => {
      if (event.detail) {
        setUser(event.detail);
      } else {
        checkUserLoggedIn();
      }
    };
    window.addEventListener('userLoggedIn', handleUserLoggedIn);
  
    return () => {
      window.removeEventListener('storage', checkUserLoggedIn);
      window.removeEventListener('userLoggedIn', handleUserLoggedIn);
    };
  }, []);

  const handleWantJobClick = () => {
    navigate('/want_job');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="top-nav">
      <div className="logo-container">
        <img src={logoImage} alt="Company Logo" className="company-logo" />
      </div>
      <div className="nav-buttons">
        {user ? (
          <>
            <span className="welcome-text">Welcome, {user.username}!</span>
            <div className="user-profile" onClick={toggleDropdown}>
              <img 
                src={user.avatar || defaultAvatar} 
                alt="User Avatar" 
                className="user-avatar" 
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/user_profile">Dashboard</Link>
                  <Link to="/user_profile">Edit Profile</Link>
                  <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="top-nav-buttons">
            <Link to="/login" className="btn-shine">Register / Login</Link>
          </div>
        )}
        <button className="top-nav-btn post-job-btn" onClick={handleWantJobClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          </svg>
          WANT A JOB
        </button>
      </div>
    </nav>
  );
};

export default TopNav;