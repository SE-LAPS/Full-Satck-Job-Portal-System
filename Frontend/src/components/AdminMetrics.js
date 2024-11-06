import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import '../css/AdminMetrics.css'; // Import custom CSS for styling

const AdminMetrics = ({ loginCount, registeredMembersCount, registeredCompaniesCount, jobCategoriesCount }) => {
  // Data for the bar chart
  const data = [
    { name: 'Login Members', value: loginCount },
    { name: 'Registered Members', value: registeredMembersCount },
    { name: 'Registered Companies', value: registeredCompaniesCount },
    { name: 'Job Categories', value: jobCategoriesCount },
  ];

  return (
    <div className="metrics-container">
      <div className="metric-summary">
        <div className="metric-card login-members">
          <h3>Login Members</h3>
          <p>{loginCount}</p>
        </div>
        <div className="metric-card registered-members">
          <h3>Registered Members</h3>
          <p>{registeredMembersCount}</p>
        </div>
        <div className="metric-card registered-companies">
          <h3>Registered Companies</h3>
          <p>{registeredCompaniesCount}</p>
        </div>
        <div className="metric-card job-categories">
          <h3>Job Categories</h3>
          <p>{jobCategoriesCount}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="chart-section">
        <h3>Metrics Analysis</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminMetrics;