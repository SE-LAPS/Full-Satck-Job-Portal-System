import React, { useState, useEffect } from 'react';
import SideMenu from './AdminSideMenu'; 
// import AdminRegisterCompany from './AdminRegisterCompany'; 
// import AdminJobCategory from './AdminJobCategory'; 
import AdminMetrics from './AdminMetrics'; 
import '../css/AdminDashboard.css'; 

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);

  // Fetch job categories data
  useEffect(() => {
    fetch('http://localhost:8080/api/job')
      .then((response) => response.json())
      .then((data) => setJobCategories(data))
      .catch((error) => console.error('Error fetching job categories:', error));
  }, []);

  // Example data for companies (replace with actual API call if needed)
  useEffect(() => {
    setCompanies([
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },
      { id: 2, name: 'Company B', industry: 'Finance', location: 'London', contact: 'email@companyb.com' },
      { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', contact: 'email@companya.com' },

    ]);
  }, []);

  // Metrics data (can be dynamically updated in a real app)
  const loginCount = 25; 
  const registeredMembersCount = 30; 
  const registeredCompaniesCount = companies.length; 
  const jobCategoriesCount = jobCategories.length; 

  return (
    <div className="dashboard-container">
      <SideMenu /> {/* Navigation Sidebar */}
      <div className="dashboard-content">
        <AdminMetrics
          loginCount={loginCount}
          registeredMembersCount={registeredMembersCount}
          registeredCompaniesCount={registeredCompaniesCount}
          jobCategoriesCount={jobCategoriesCount} // Pass the dynamically calculated count
        />

      </div>
      
    </div>
  );
};

export default AdminDashboard;