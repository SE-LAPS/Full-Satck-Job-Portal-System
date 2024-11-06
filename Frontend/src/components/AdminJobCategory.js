import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AdminJobCategory.css'; // Ensure appropriate styles

const AdminJobCategory = () => {
  const [jobPositions, setJobPositions] = useState([]);
  const navigate = useNavigate();

  // Fetch job positions data
  useEffect(() => {
    fetch('http://localhost:8080/api/job')
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error('Error fetching job positions:', error));
  }, []);

  const handleUpdate = (id) => {
    // Handle update functionality here
    console.log('Update job with id:', id);
  };

  const handleDelete = (id) => {
    // Handle delete functionality here
    console.log('Delete job with id:', id);
  };

  const handleBack = () => {
    navigate('/admin_dashboard');
  };

  return (
    <div className="admin-job-category">
      <h2>Job Category</h2>
      <button onClick={handleBack} className="back-button">Back to Dashboard</button>
      {jobPositions.length === 0 ? (
        <p>No job positions available.</p>
      ) : (
        <table className="job-category-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobPositions.map((job) => (
              <tr key={job.id}>
                <td>{job.positionTitle || 'N/A'}</td>
                <td>{job.category || 'N/A'}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(job.id)}
                    className="update-button"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminJobCategory;
