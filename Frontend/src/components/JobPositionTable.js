import React, { useEffect, useState } from 'react';
import '../css/JobPositionTable.css';
import SideMenu from './SideMenu';

function JobPositionTable() {
  const [jobPositions, setJobPositions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    id: null,
    positionTitle: '',
    category: '',
    location: '',
    jobType: '',
    positionDescription: '',
    companyName: '',
    companyWebsite: '',
    postDate: '',
    closeDate: ''
  });

  useEffect(() => {
    fetchJobPositions();
  }, []);

  const fetchJobPositions = () => {
    fetch('http://localhost:8080/api/job')
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleEditClick = (job) => {
    setIsEditing(true);
    setCurrentJob({
      ...job,
      postDate: job.postDate ? job.postDate.split('T')[0] : '',
      closeDate: job.closeDate ? job.closeDate.split('T')[0] : ''
    });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this job position?')) {
      fetch(`http://localhost:8080/api/job/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            fetchJobPositions();
          } else {
            throw new Error('Failed to delete job position');
          }
        })
        .catch((error) => console.error('Error deleting data:', error));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentJob({ ...currentJob, [name]: value });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/job/${currentJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentJob),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to update job position');
      })
      .then(() => {
        fetchJobPositions();
        setIsEditing(false);
        resetCurrentJob();
      })
      .catch((error) => console.error('Error updating data:', error));
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    resetCurrentJob();
  };

  const resetCurrentJob = () => {
    setCurrentJob({
      id: null,
      positionTitle: '',
      category: '',
      location: '',
      jobType: '',
      positionDescription: '',
      companyName: '',
      companyWebsite: '',
      postDate: '',
      closeDate: ''
    });
  };

  const getStatus = (postDate, closeDate) => {
    const today = new Date();
    const postDateObj = new Date(postDate);
    const closeDateObj = new Date(closeDate);

    if (closeDateObj < today) {
      return { status: 'Closed', color: 'blue' };
    } else if (postDateObj > today) {
      return { status: 'Pending', color: 'orange' };
    } else {
      return { status: 'Active', color: 'green' };
    }
  };

  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="job-position-table-container">
        <h2>Job Positions</h2>
        {isEditing ? (
          <div className="edit-form">
            <h3>Edit Job Position</h3>
            <form onSubmit={handleSaveClick}>
              <div className="form-group">
                <label htmlFor="positionTitle">Job Title:</label>
                <input
                  type="text"
                  id="positionTitle"
                  name="positionTitle"
                  value={currentJob.positionTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={currentJob.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={currentJob.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobType">Job Type:</label>
                <input
                  type="text"
                  id="jobType"
                  name="jobType"
                  value={currentJob.jobType}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="positionDescription">Position Description:</label>
                <textarea
                  id="positionDescription"
                  name="positionDescription"
                  value={currentJob.positionDescription}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={currentJob.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyWebsite">Company Website:</label>
                <input
                  type="text"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={currentJob.companyWebsite}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postDate">Post Date:</label>
                <input
                  type="date"
                  id="postDate"
                  name="postDate"
                  value={currentJob.postDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="closeDate">Close Date:</label>
                <input
                  type="date"
                  id="closeDate"
                  name="closeDate"
                  value={currentJob.closeDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-save">Save</button>
                <button type="button" onClick={handleCancelClick} className="btn-cancel">Cancel</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Job Type</th>
                  <th>Company Name</th>
                  <th>Post Date</th>
                  <th>Close Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobPositions.map((job) => {
                  const { status, color } = getStatus(job.postDate, job.closeDate);
                  return (
                    <tr key={job.id}>
                      <td data-label="Job Title">{job.positionTitle || 'N/A'}</td>
                      <td data-label="Category">{job.category || 'N/A'}</td>
                      <td data-label="Location">{job.location || 'N/A'}</td>
                      <td data-label="Job Type">{job.jobType || 'N/A'}</td>
                      <td data-label="Company Name">{job.companyName || 'N/A'}</td>
                      <td data-label="Post Date">{job.postDate ? new Date(job.postDate).toLocaleDateString() : 'N/A'}</td>
                      <td data-label="Close Date">{job.closeDate ? new Date(job.closeDate).toLocaleDateString() : 'N/A'}</td>
                      <td data-label="Status" style={{ backgroundColor: color, color: 'white' }}>{status}</td>
                      <td data-label="Actions">
                        <button onClick={() => handleEditClick(job)} className="btn-edit">Edit</button>
                        <button onClick={() => handleDeleteClick(job.id)} className="btn-delete">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobPositionTable;