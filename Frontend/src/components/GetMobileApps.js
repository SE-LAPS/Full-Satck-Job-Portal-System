import React from 'react';
import '../css/GetMobileApps.css'; // Your custom CSS
import appleIcon from '../assets/bg3.png';
import androidIcon from '../assets/bg2.png';
import phone1 from '../assets/bg1.png'; 

const GetMobileApps = () => {
  return (
    <div className="promo-container">
      <div className="text-section">
        <h1>Get The Mobile Apps</h1>
        <p>
          Search Through Millions of Jobs and Find the Right Fit. Simply
          Swipe Right to Apply.
        </p>
        <div className="button-container">
          <a href="https://www.apple.com/app-store/" className="store-button">
            <img src={appleIcon} alt="App Store" /> App Store
          </a>
          <a href="https://play.google.com/store/games?hl=en" className="store-button">
            <img src={androidIcon} alt="Play Store" /> Play Store
          </a>
        </div>
      </div>
      <div className="image-section">
        <img src={phone1} alt="Mobile App 1" className="phone-img" />
      </div>
    </div>
  );
};

export default GetMobileApps;