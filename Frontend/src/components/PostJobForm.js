import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import '../css/Dashboard.css';

const PostJobForm = ({ onJobPosted }) => {
  const [formData, setFormData] = useState({
    positionTitle: '',
    category: '',
    salaryRange: '',
    worldwidePosition: false,
    jobType: '',
    applicationLinkOrEmail: '',
    positionDescription: '',
    companyName: '',
    companyWebsite: '',
    emailAddress: '',
    companyDescription: '',
    location: '',
    postDate: '',
    closeDate: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [companyDetailsSet, setCompanyDetailsSet] = useState(false);
  const [showCompanyDetails, setShowCompanyDetails] = useState(true);

  useEffect(() => {
    const savedCompanyDetails = localStorage.getItem('companyDetails');
    if (savedCompanyDetails) {
      const parsedDetails = JSON.parse(savedCompanyDetails);
      setFormData(prevData => ({ ...prevData, ...parsedDetails }));
      setCompanyDetailsSet(true);
      setShowCompanyDetails(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!companyDetailsSet) {
      const companyDetails = {
        companyName: formData.companyName,
        companyWebsite: formData.companyWebsite,
        emailAddress: formData.emailAddress,
        companyDescription: formData.companyDescription,
        location: formData.location
      };
      localStorage.setItem('companyDetails', JSON.stringify(companyDetails));
      setCompanyDetailsSet(true);
      setShowCompanyDetails(false);
    }

    const response = await fetch('http://localhost:8080/api/job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Job position submitted successfully');
      setSubmitted(true);
      if (onJobPosted) onJobPosted();
    } else {
      console.error('Failed to submit job position');
    }
  };

  const toggleCompanyDetails = () => {
    setShowCompanyDetails(!showCompanyDetails);
  };

  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="post-job-form-container">
        <h2>Reach one of the largest remote job communities</h2>
        <h3>Job Positions Details</h3>
        <form onSubmit={handleSubmit}>
          {/* Position Title Input */}
          <div>
            <label>Position Title</label>
            <input
              type="text"
              name="positionTitle"
              placeholder="Position Title"
              value={formData.positionTitle}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category Select */}
          <div>
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} style={{ width: '628px' }}>
              <option value="">Select a Job category</option>
              <option value="Full-Stack Programming">Full-Stack Development</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Devops Engineer">Devops Engineer</option>
              <option value="UI/UX Engineer">UI/UX Engineer</option>
              <option value="QA Engineer">QA Engineer</option>
            </select>
          </div>

          {/* Job Type Radio Buttons */}
          <div>
            <label>Job Type</label>
            <input
              type="radio"
              name="jobType"
              value="Full-Time"
              checked={formData.jobType === "Full-Time"}
              onChange={handleChange}
            /> Full-Time
            <input
              type="radio"
              name="jobType"
              value="Part-Time"
              checked={formData.jobType === "Part-Time"}
              onChange={handleChange}
            /> Part-Time
            <input
              type="radio"
              name="jobType"
              value="Contract"
              checked={formData.jobType === "Contract"}
              onChange={handleChange}
            /> Contract
          </div>

          {/* Application Link or Email Input */}
          <div>
            <label>Application Link or Email</label>
            <input
              type="text"
              name="applicationLinkOrEmail"
              placeholder="Application Link or Email"
              value={formData.applicationLinkOrEmail}
              onChange={handleChange}
              required
            />
          </div>

          {/* Position Description Textarea */}
          <div>
            <label>Position Description</label>
            <textarea
              name="positionDescription"
              placeholder="Describe the job position here"
              value={formData.positionDescription}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Salary Range Select */}
          <div>
            <label>Salary Range</label>
            <select name="salaryRange" value={formData.salaryRange} onChange={handleChange} style={{ width: '628px' }}>
              <option value="">Select a Salary Range</option>
              <option value="Any">Any</option>
              <option value="15k-20k">15k-20k</option>
              <option value="20k-30k">20k-30k</option>
              <option value="50k-100k">50k-100k</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date Range Section */}
          <label>Date Range</label>
          <br />
          <div className="date-range-container">
            {/* Post Date */}
            <div className="date-field">
              <label>Post Date</label>
              <input
                type="date"
                name="postDate"
                value={formData.postDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Close Date */}
            <div className="date-field">
              <label>Close Date</label>
              <input
                type="date"
                name="closeDate"
                value={formData.closeDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <center><h3>Company Details</h3></center>
          {companyDetailsSet && (
            <button type="button" onClick={toggleCompanyDetails}>
              {showCompanyDetails ? 'Hide Company Details' : 'Show Company Details'}
            </button>
          )}

          {(!companyDetailsSet || showCompanyDetails) && (
            <>
              {/* Company Name Input */}
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  readOnly={companyDetailsSet}
                />
              </div>

              {/* Company Website Input */}
              <div>
                <label>Company Website</label>
                <input
                  type="text"
                  name="companyWebsite"
                  placeholder="Company Website"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  readOnly={companyDetailsSet}
                />
              </div>

              {/* Email Address Input */}
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  readOnly={companyDetailsSet}
                />
              </div>

              {/* Company Description Textarea */}
              <div>
                <label>Company Description</label>
                <textarea
                  name="companyDescription"
                  placeholder="Describe your company here"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  readOnly={companyDetailsSet}
                ></textarea>
              </div>

              {/* Location Input */}
              <div>
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location Name"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  readOnly={companyDetailsSet}
                />
              </div>
            </>
          )}

          <center><h3>Finally, confirm and pay</h3></center>
          <div>
            <center><p>Featured positions will appear on top of the list Preview</p></center>
          </div>

          {/* Submit Button */}
          <button type="submit">Proceed to Job Post</button>
        </form>

        {/* Success message after submission */}
        {submitted && (
          <div className="submitted-message">
            <h3>Job position submitted successfully!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostJobForm;