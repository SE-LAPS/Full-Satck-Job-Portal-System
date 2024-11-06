import React, { useState } from 'react';
import '../css/RecentJobPosts.css';


const RecentJobPosts = ({ jobPosts = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7; // Number of rows per page

  // Calculate the indices of the first and last job post on the current page
  const indexOfLastJob = currentPage * rowsPerPage;
  const indexOfFirstJob = indexOfLastJob - rowsPerPage;
  const currentJobPosts = jobPosts.slice(indexOfFirstJob, indexOfLastJob);

  // Total number of pages
  const totalPages = Math.ceil(jobPosts.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="recent-job-posts">
      <h2>Recent Job Posts</h2>

      {jobPosts.length === 0 ? (
        <p>No job posts available.</p>
      ) : (
        <>
          <table className="job-posts-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Company Website</th>
              </tr>
            </thead>
            <tbody>
              {currentJobPosts.map((job) => (
                <tr key={job.id}> {/* Use a unique id for the key */}
                  <td>{job.positionTitle || 'N/A'}</td>
                  <td>{job.category || 'N/A'}</td>
                  <td>{job.location || 'N/A'}</td>
                  <td>{job.jobType || 'N/A'}</td>
                  <td>
                    {job.companyWebsite ? (
                      <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                  aria-label={`Page ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecentJobPosts;

