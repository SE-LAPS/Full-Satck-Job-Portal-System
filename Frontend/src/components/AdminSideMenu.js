import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminSideMenu.css'; // Styles for the sidebar

function AdminSideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <li><Link to="/admin_dashboard">Dashboard</Link></li>
        <li><Link to="/login-members">Login Members</Link></li>
        <li><Link to="/register-members">Registered Members</Link></li>
        <li><Link to="/register-company">Registered Companies</Link></li>
        <li><Link to="/adminJobCategory">Manage Job Categories</Link></li> {/* Job Categories Link */}
      </ul>
    </div>
  );
}

export default AdminSideMenu;