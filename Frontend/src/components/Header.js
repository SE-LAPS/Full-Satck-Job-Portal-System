import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../css/SideNav.css'; // Ensure the correct relative path

const SideNav = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={`side-nav ${scrollDirection}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/search">Jobs</Link>
      <Link to="/job_alert">Job Alerts</Link>
      <Link to="/employers">Employers</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/faqs">FAQs</Link>

    </div>
  );
};

export default SideNav;