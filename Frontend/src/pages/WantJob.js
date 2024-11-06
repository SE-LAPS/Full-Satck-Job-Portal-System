import React, { useState } from 'react';
import '../css/wantJob.css';

const WantJob = () => {
  const jobCategories = [
    { category: 'Web Development', openPositions: 254 },
    { category: 'Education & Training', openPositions: 102 },
    { category: 'PHP Programming', openPositions: 409 },
    { category: 'Web Designer', openPositions: 324 },
    { category: 'Graphic Designer', openPositions: 149 },
    { category: 'Project Management', openPositions: 100 },
    { category: 'Customer Service', openPositions: 545 },
    { category: 'Multimedia', openPositions: 300 },
    { category: 'Social Media', openPositions: 200 },
    { category: 'Finance Management', openPositions: 272 },
    { category: 'Marketing & Sales', openPositions: 224 },
    { category: 'Advertising', openPositions: 309 },
    { category: 'Writing', openPositions: 150 },
    { category: 'Office & Admin', openPositions: 123 },
    { category: 'Software Development', openPositions: 405 },
  ];

  const allHotJobs = [
    { title: 'Frontend Development', company: 'Facebook, Inc.', location: 'New York City, UK', type: 'Full-time', badge: 'Featured' },
    { title: 'Full Stack Developer', company: 'Google LLC', location: 'Washington City, UK', type: 'Part-time', badge: 'Urgent' },
    { title: 'Open Source Interactive Developer', company: 'New York Times', location: 'New York City, UK', type: 'Freelance', badge: 'Featured' },
    { title: 'Frontend Development', company: 'Facebook, Inc.', location: 'New York City, UK', type: 'Full-time', badge: 'Remote' },
    { title: 'Open Source Interactive Developer', company: 'New York Times', location: 'New York City, UK', type: 'Freelance', badge: 'Featured' },
    { title: 'Frontend Development', company: 'Facebook, Inc.', location: 'New York City, UK', type: 'Full-time', badge: 'Remote' },
    { title: 'Open Source Interactive Developer', company: 'New York Times', location: 'New York City, UK', type: 'Freelance', badge: 'Featured' },
    { title: 'Frontend Development', company: 'Facebook, Inc.', location: 'New York City, UK', type: 'Full-time', badge: 'Remote' },
    // More jobs can be added here
  ];

  const [visibleJobs, setVisibleJobs] = useState(4);

  const loadMoreJobs = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 4);
  };

  return (
    <div className="wantJob">
      <div className="jobCategories">
        <h2>Top Categories</h2>
        <div className="categoriesGrid">
          {jobCategories.map((category, index) => (
            <div key={index} className="category">
              <span className="categoryName">{category.category}</span>
              <span className="openPositions">{category.openPositions} Open positions</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hotJobs">
        <h2>Hot Jobs</h2>
        {allHotJobs.slice(0, visibleJobs).map((job, index) => (
          <div key={index} className="jobCard">
            <div className="jobInfo">
              <h3>{job.title}</h3>
              <span>{job.company}</span>
              <span>{job.location}</span>
            </div>
            <div className="jobType">
              <span className={`badge ${job.badge.toLowerCase()}`}>{job.badge}</span>
              <button className="applyButton">Apply Job</button>
            </div>
          </div>
        ))}
        {visibleJobs < allHotJobs.length && (
          <button className="loadMoreButton" onClick={loadMoreJobs}>Load More Jobs</button>
        )}
      </div>
    </div>
  );
};

export default WantJob;