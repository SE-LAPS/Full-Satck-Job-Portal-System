import React from 'react';
import howWeWorkImage from '../assets/campanyimg1.jpg'; // Update with correct path
import '../css/HowWeWork.css';

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-content">
        <div className="how-we-work-text">
          <h2>WHY JOB HUNTERS?</h2>
          <p>
          The Job Hunters Hiring Platform combines the best elements of consumer grade experience and enterprise grade technology.
           This unique combination is why leading enterprises use SmartRecruiters to solve their recruiting challenges and drive their businesses forward.
          </p>
          <ul>
            <li>Make Recruiting a Team Sport</li>
            <li>Customize Any Workflow</li>
            <li>Make Integrations a Breeze</li>
          </ul>
          <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Read More</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        <div className="how-we-work-image">
          <img src={howWeWorkImage} alt="How We Work" />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;