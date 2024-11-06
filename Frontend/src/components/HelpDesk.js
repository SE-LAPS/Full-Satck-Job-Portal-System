import React, { useState } from "react";
import "../css/HelpDesk.css";

const HelpDesk = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSubmitted(true);
      // In a real application, here you would typically send the query to the backend
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuery("");
  };

  return (
    <div className="helpdesk-container">
      <h2>Help Desk</h2>
      <p>We're here to assist you. Please submit your query below, and our team will get back to you shortly.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="helpdesk-form">
          <textarea
            className="query-input"
            placeholder="Enter your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="submission-success">
          <h3>Thank you for your query!</h3>
          <p>We have received your question and will respond to your query via email shortly.</p>
          <button onClick={handleReset} className="reset-btn">Submit another query</button>
        </div>
      )}

      <div className="support-box">
        <h3>Contact Support</h3>
        <p>Email: support@jobportal.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Hours: Mon - Fri, 9 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default HelpDesk;