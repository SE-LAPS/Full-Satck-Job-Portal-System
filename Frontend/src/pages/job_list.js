// src/components/JobList.js

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const jobs = [
  { company: 'AMAZON', title: 'Fullstack Developer', location: 'Colombo',  jobType: 'Full-Time' },
  { company: 'FLP', title: 'Digital Marketing', location: 'Remote',  jobType: 'Part-Time' },
  { company: 'PAYTM', title: 'Jr. Frontend Developer', location: 'Mumbai',  jobType: 'Full-Time' },
  { company: 'TESLA', title: 'Software Engineer', location: 'Gurugram',  jobType: 'Full-Time' },
  { company: 'ELASTIC RUN', title: 'Jr. Backend Developer', location: 'Jaipur',  jobType: 'Part-Time' },
  { company: 'TCS', title: 'Jr. Devops Engineer', location: 'Bangalore',  jobType: 'Full-Time' },
  { company: 'MYNTRA', title: 'Jr. Frontend Developer', location: 'Remote',  jobType: 'Part-Time' },
  { company: 'SYNOPSYS', title: 'Full Stack Engineer', location: 'Hyderabad',  jobType: 'Full-Time' },
  { company: 'OPTUM', title: 'Front-End Developer', location: 'New Delhi',  jobType: 'Full-Time' },
  { company: 'INFOSYS', title: 'React Developer', location: 'Bangalore',  jobType: 'Full-Time' },
  { company: 'TECH MAHINDRA', title: 'NodeJS Developer', location: 'Jaipur',  jobType: 'Full-Time' },
  { company: 'CLOUD MENTOR', title: 'Software Engineer', location: 'Surat',  jobType: 'Full-Time' },
  { company: 'FLIPKART', title: 'Sr. Devops Engineer', location: 'Mumbai',  jobType: 'Full-Time' },
  { company: 'COGNIZANT', title: 'Front-End Developer', location: 'Hyderabad',  jobType: 'Full-Time' },
  { company: 'IBM', title: 'Jr. Backend Developer', location: 'Bangalore',  jobType: 'Full-Time' },

];

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { jobTitle, location: jobLocation, jobType } = location.state;

      const filtered = jobs.filter(job =>
        (!jobTitle || job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (!jobLocation || job.location.toLowerCase().includes(jobLocation.toLowerCase())) &&
        (!jobType || job.jobType.toLowerCase() === jobType.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [location.state]);

  const handleApplyClick = (job) => {
    navigate('/job_details', { state: { job } });
  };

  return (
    <div className="job-list-container">
      <h1 className="title">Job Listings</h1>

      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="job-list">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-card">
            <img
              src={`path/to/${job.company.toLowerCase()}.png`}
              alt={`${job.company} logo`}
              className="job-logo"
            />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.category}</p>
              <p>{job.jobType}</p>
            </div>
            <div className="job-actions">
              <button className="save-btn">Save</button>
              <button className="apply-btn" onClick={() => handleApplyClick(job)}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default JobList;