// SideNav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SideNav.css';

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandNav = () => setIsExpanded(true);
  const collapseNav = () => setIsExpanded(false);

  return (
    <nav 
      className={`side-nav ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={expandNav}
      onMouseLeave={collapseNav}
    >
      <div className="toggle-btn">
        {isExpanded ? '▶' : '◀'}
      </div>
      <div className="nav-content">
        <Link to="/home" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/search" className="nav-item">Jobs</Link>
        <Link to="/job_alert" className="nav-item">Job Alerts</Link>
        <Link to="/employers" className="nav-item">Employers</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/faqs" className="nav-item">FAQs</Link>
        <Link to="/help" className='nav-item'>Help Desk</Link>

      </div>
    </nav>
  );
};

export default SideNav;