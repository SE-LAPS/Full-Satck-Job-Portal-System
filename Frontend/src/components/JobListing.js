import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/JobListing.css';

// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    companyLogo: require('../assets/companyLogos/codegen_logo.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$100 - $150',
  },
  {
    id: 2,
    title: 'UI/UX Engineer',
    companyLogo: require('../assets/companyLogos/ifs.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Part Time',
    salary: '$123 - $456',
  },
  {
    id: 3,
    title: 'Devops Engineer',
    companyLogo: require('../assets/companyLogos/dialog.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Part Time',
    salary: '$123 - $456',
  },
  {
    id: 4,
    title: 'Business Analysis',
    companyLogo: require('../assets/companyLogos/creative software.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
  {
    id: 5,
    title: 'Quality Assurance',
    companyLogo: require('../assets/companyLogos/lseg.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Part Time',
    salary: '$123 - $456',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    companyLogo: require('../assets/companyLogos/mobitel.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
  {
    id: 7,
    title: 'Backend Developer',
    companyLogo: require('../assets/companyLogos/orel.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
  {
    id: 8,
    title: 'Wordpress Developer',
    companyLogo: require('../assets/companyLogos/sysco lab.png'),
    location: 'Colombo, Sri Lanka',
    type: 'Full Time',
    salary: '$123 - $456',
  },
];

const JobListing = () => {
  const [filter, setFilter] = useState('All'); // State - manage job type filter
  const navigate = useNavigate(); // Hook - programmatically navigate

  // Function - handle filter button clicks
  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  // Filter jobs on the selected type
  const filteredJobs = filter === 'All'
    ? jobs
    : jobs.filter((job) => job.type === filter);

  // Function - handle job details view
  const handleViewDetailsClick = (job) => {
    navigate('/view-job-details', { state: { job } }); // Navigate to job details page with job data
  };

  return (
    <div className="job-listing">
      <h2 className="heading">JOB LISTING</h2>
      <br />
      <div className="filters">
        {/* Filter buttons for job types */}
        <button className="filter-button" onClick={() => handleFilterClick('All')}>Featured</button>
        <button className="filter-button" onClick={() => handleFilterClick('Full Time')}>Full Time</button>
        <button className="filter-button" onClick={() => handleFilterClick('Part Time')}>Part Time</button>
      </div>
      <br />
      <div className="job-cards">
        {/* Render filtered job cards */}
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.companyLogo} alt={`${job.title} logo`} className="company-logo" />
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.type}</p>
              <p>{job.salary}</p>
            </div>
            <button className="fancy" onClick={() => handleViewDetailsClick(job)}>
              <span className="top-key"></span>
              <span className="text">View Details</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </div>
        ))}
      </div>
      <button className="browse-more-button">
        <span className="text">Browse More Jobs</span>
      </button>
    </div>
  );
};

export default JobListing;
