import React from 'react';
import '../css/Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import logo from '../assets/2.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-description">
  Welcome to our platform, your premier destination for bridging the gap between talented job seekers and leading employers across various industries. At our core, we are dedicated to revolutionizing the way you connect with top employers, offering a wealth of opportunities to propel your career forward. 
<br></br>
  Whether you’re a recent graduate eager to step into the professional world or an experienced professional looking to advance your career, our platform is designed to meet your unique needs. We understand the challenges of the job market and are here to provide you with a comprehensive suite of tools and resources to enhance your job search and career development journey.

</p>

        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="yellow-text">Jobseekers</h3>
            <ul>
              <li><a href="/">Search Jobs</a></li>
              <li><a href="/">Register</a></li>
              <li><a href="/">Job Alerts</a></li>
              <li><a href="/">Career Advice</a></li>
              <li><a href="/">More...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="yellow-text">Recruiters</h3>
            <ul>
              <li><a href="/">Search Jobs</a></li>
              <li><a href="/">CV Database Access</a></li>
              <li><a href="/">Advertise Jobs</a></li>
              <li><a href="/">Search CVs</a></li>
              <li><a href="/">More...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="yellow-text">About Us</h3>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Help</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">More...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="yellow-text">Job Details</h3>
            <ul>
              <li><a href="/">Search Jobs</a></li>
              <li><a href="/">Register</a></li>
              <li><a href="/">Job Alerts</a></li>
              <li><a href="/">Career Advice</a></li>
              <li><a href="/">More...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="yellow-text">Companies</h3>
            <ul>
              <li><a href="/">Search Jobs</a></li>
              <li><a href="/">Register</a></li>
              <li><a href="/">Job Alerts</a></li>
              <li><a href="/">Career Advice</a></li>
              <li><a href="/">More...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="yellow-text">Contact Us</h3>
            <ul className="social-links">
              <li><a href="/"><FaFacebookF /></a></li>
              <li><a href="/"><FaLinkedinIn /></a></li>
              <li><a href="/"><FaInstagram /></a></li>
              <li><a href="/"><FaWhatsapp /></a></li>
              <li><a href="/"><FaTwitter /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section subscribe">
          <h3 className="yellow-text">Subscribe to Our Newsletter</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Your E-mail Address" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="rainbow-text">&copy; 2024 | All Rights Reserved | Created with Group - 06<br />-|| Design by - DesignITBazinga ||-</p>
      </div>
    </footer>
  );
};

export default Footer;
