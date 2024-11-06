import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/LoginMembers.css';

const LoginMembers = () => {
  const [loggedInUsers, setLoggedInUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoggedInUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/users/logged-in');
        setLoggedInUsers(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching logged-in users:', error);
        setError('Failed to fetch logged-in users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLoggedInUsers();
    const interval = setInterval(fetchLoggedInUsers, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <h3>Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="login-members-container">
      <h2>Currently Logged-In Members</h2>
      <button className="back-button" onClick={() => navigate('/admin_dashboard')}>Back to Dashboard</button>
      {loggedInUsers.length === 0 ? (
        <p className="no-users">No users currently logged in.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loggedInUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="update-button">Update</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoginMembers;
