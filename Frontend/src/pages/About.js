import React from 'react';
import companyImage from '../assets/Img.png'; // Adjust path as needed
//import videoThumbnail from '../assets/Img.png'; // Adjust path as needed
import videoFile from '../assets/123.mp4'; // Adjust path as needed

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="about-intro">
          <h2>Empowering Your Career Journey</h2>
          <p>At Sri Lanka Institute of BioTechnology, we are dedicated to connecting talented individuals with the right career opportunities. Our innovative platform streamlines the job search process, making it easier for you to find, apply for, and secure your ideal job.</p>
        </div>
        <img src={companyImage} alt="Team" className="about-image" />
      </section>
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <i className="fas fa-user-plus"></i>
            <h3>Create Account</h3>
            <p>Sign up on our platform with a few simple steps. Enter your personal details, set up your profile, and start exploring job opportunities.</p>
          </div>
          <div className="step">
            <i className="fas fa-file-upload"></i>
            <h3>Upload Resume</h3>
            <p>Upload your resume to our system. Our platform supports various formats and provides tools to help you enhance your resume.</p>
          </div>
          <div className="step">
            <i className="fas fa-briefcase"></i>
            <h3>Find Jobs</h3>
            <p>Browse through a wide range of job listings tailored to your skills and interests. Use our advanced search filters to find the best matches.</p>
          </div>
          <div className="step">
            <i className="fas fa-check-circle"></i>
            <h3>Apply Job</h3>
            <p>Apply directly to the jobs you are interested in. Track your applications and receive notifications about your application status.</p>
          </div>
        </div>
      </section>
      <section className="video-section">
        <h2>Good Life Begins With A Good Company</h2>
        <div className="video-container">
          <video controls className="video-player">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-info">
          <div className="info-item">
            <h3>1</h3>
            <p>Our platform offers an intuitive user experience, making it easy for job seekers to navigate and find relevant opportunities.</p>
          </div>
          <div className="info-item">
            <h3>2</h3>
            <p>We provide personalized job recommendations based on your profile and preferences, ensuring you never miss a great opportunity.</p>
          </div>
          <div className="info-item">
            <h3>3</h3>
            <p>Our support team is always available to assist with any questions or issues you may encounter throughout your job search.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
