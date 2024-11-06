import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/jobalert.css'; // Import CSS for styling

const JobAlerts = () => {
  const [jobAlerts, setJobAlerts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const alertsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobPosts = async () => {
      const response = await fetch('http://localhost:8080/api/job');
      const data = await response.json();
      setJobAlerts(data);
    };

    fetchJobPosts();
  }, []);

  const indexOfLastAlert = currentPage * alertsPerPage;
  const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
  const currentJobAlerts = jobAlerts.slice(indexOfFirstAlert, indexOfLastAlert);

  const totalPages = Math.ceil(jobAlerts.length / alertsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleApplyClick = (job) => {
    navigate('/apply_job', { state: { job } }); // Pass job details to ApplyJobs
  };

  return (
    <div className="job-alerts-page">
      <main>
        <h1>Job Alerts</h1>
        <div className="job-alerts">
          {currentJobAlerts.map((alert, index) => (
            <div key={index} className="job-alert-container">
              <div className="job-alert">
                {alert.jobImage && <img src={alert.jobImage} alt={alert.positionTitle} className="job-image" />}
                <h2 className="job-title">{alert.positionTitle}</h2>
                <p className="job-details">
                  <strong>Type:</strong> {alert.jobType} <br />
                  <strong>Company Name:</strong> {alert.companyName} <br />
                  <strong>Location:</strong> {alert.location}
                </p>
                <button
                  className="apply-button"
                  onClick={() => handleApplyClick(alert)}
                >
                  APPLY NOW
                </button>
              </div>
              {index < currentJobAlerts.length - 1 && <hr className="divider" />}
              {/* Add a horizontal line between job alerts */}
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default JobAlerts;