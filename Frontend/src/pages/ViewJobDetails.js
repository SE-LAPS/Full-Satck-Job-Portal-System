import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewJobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state;

  const handleApplyNow = () => {
    navigate('/apply_job', { state: { job } });
  };

  return (
    <div className="view-job-details-container">
      <div className="view-job-details">
        <h1>{job.title}</h1>
        <img src={job.companyLogo} alt={`${job.title} logo`} className="company-logo" />
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
      </div>

      <div className="job-section">
        <h2>Job Description</h2>
        <p>Global Wavenet is a leading telecommunications software, systems, and infrastructure solutions provider in the ICT sector, serving wired and wireline telco operators across the world. We are a fast-growing, dynamic technology company with over 17 years of experience operating in over 20 international markets in South America, Africa, and the Asia Pacific region.</p>
      </div>

      <div className="job-section">
        <h2>Responsibilities</h2>
        <ul>
          <li>Assist in the design and development of user interfaces for web and mobile applications.</li>
          <li>Collaborate with the design team to create wireframes, prototypes, and mockups.</li>
          <li>Conduct user research and contribute insights to enhance usability and user experience.</li>
          <li>Assist in user testing and feedback gathering for design iterations.</li>
          <li>Work closely with developers to ensure design integrity throughout the development process.</li>
          <li>Keep up-to-date with industry trends and best practices in UI/UX design.</li>
        </ul>
      </div>

      <div className="job-section">
        <h2>Requirements</h2>
        <ul>
          <li>Pursuing a degree in multimedia designing, IT, graphic designing or a related field.</li>
          <li>Understanding of design principles, typography, and color theory.</li>
          <li>Proficiency in design tools such as Adobe Photoshop, Adobe After Effects, Adobe Illustrator Figma or similar software.</li>
          <li>Ability to communicate ideas effectively and work collaboratively in a team environment.</li>
          <li>Eagerness to learn and adapt to new design methodologies and technologies.</li>
          <li>Portfolio showcasing UI/UX design projects or coursework (if available).</li>
        </ul>
      </div>

      <div className="job-section">
        <h2>Benefits</h2>
        <ul>
          <li>Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar!)</li>
          <li>28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday</li>
          <li>Generous annual bonus</li>
          <li>Healthcare package</li>
          <li>Paid community days to volunteer for a charity of your choice</li>
          <li>£100 contribution for your own personal learning and development</li>
          <li>Free Breakfast on Mondays and free snacks in the office</li>
          <li>Access to Perkbox with numerous discounts plus free points from the company to spend as you wish</li>
          <li>Cycle 2 Work Scheme</li>
          <li>Brand new MacBook Pro</li>
          <li>Joining an agency on the cusp of exponential growth and being part of this exciting story</li>
        </ul>
      </div>

      <div className="view-details-apply-button">
        <button onClick={handleApplyNow}>Apply Now</button>
      </div>

      
    </div>
  );
};

export default ViewJobDetails;
