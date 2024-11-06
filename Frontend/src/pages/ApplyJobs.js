import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/applyjobs.css'; // Import CSS for styling

const ApplyJobs = () => {
  const location = useLocation();
  const job = location.state?.job; // Access job details from navigation state

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Please fill out all fields.');
      return;
    }

    const data = {
      name,
      email,
      companyName: job?.companyName || '',
      positionTitle: job?.positionTitle || '',
    };

    try {
      const response = await axios.post('http://localhost:8080/api/job/apply', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response); // Log response to debug
      if (response.status === 201) {
        alert('Your application has been submitted successfully!');
        // Optionally, redirect or clear form fields
      } else {
        alert('Failed to submit your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the application:', error);
      alert('An error occurred while submitting your application.');
    }
  };

  return (
    <div className="apply-jobs-container">
      <h1>Apply for a Job</h1>
      {job && (
        <div className="job-details-preview">
          <h2>Applying for: {job.positionTitle}</h2>
          <p><strong>Company:</strong> {job.companyName}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="apply-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJobs;