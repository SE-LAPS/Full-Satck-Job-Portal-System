import React from 'react';
import ifsLogo from '../assets/companyLogos/ifs.png';
import codegenLogo from '../assets/companyLogos/codegen_logo.png';
import HCLLogo from '../assets/companyLogos/HCL.png';

const JobTable = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'IFS',
      location: 'Sri Lanka',
      applications: '12 Applied',
      created: 'October 27, 2024',
      expired: 'November 25, 2024',
      status: 'Active',
      logo: ifsLogo,
    },
    {
      title: 'UI/UX Engineer',
      company: 'CODEGEN',
      location: 'Sri Lanka',
      applications: '16 Applied',
      created: 'October 27, 2024',
      expired: 'November 25, 2024',
      status: 'Active',
      logo: codegenLogo,
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Software',
      location: 'Sri Lanka',
      applications: '12 Applied',
      created: 'October 27, 2024',
      expired: 'November 25, 2024',
      status: 'Active',
      logo: HCLLogo,
    },
  ];

  return (
    <div className="job-table">
    <h2>Manage Jop Post</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Applications</th>
            <th>Created & Expired</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>
                <div className="job-info">
                  <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
                  <div>
                    <p>{job.title}</p>
                    <p>{job.company}, {job.location}</p>
                  </div>
                </div>
              </td>
              <td>
                <a href="https://www.nsbm.ac.lk/">{job.applications}</a>
              </td>
              <td>
                <p>{job.created}</p>
                <p>{job.expired}</p>
              </td>
              <td>{job.status}</td>
              <td>
                <button className="view-btn">👁️</button>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;