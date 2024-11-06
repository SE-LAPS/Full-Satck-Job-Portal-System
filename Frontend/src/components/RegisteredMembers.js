import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/RegisteredMembers.css';

const RegisteredMembers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Generate mock users with repeating pattern
    const mockUsers = Array.from({ length: 24 }, (_, index) => {
      const roleIndex = index % 3;
      const setIndex = Math.floor(index / 3) + 1;
      let role, username;
      
      switch (roleIndex) {
        case 0:
          role = 'COMPANY';
          username = `company${setIndex}`;
          break;
        case 1:
          role = 'ADMIN';
          username = `admin${setIndex}`;
          break;
        case 2:
          role = 'JOB_SEEKER';
          username = `jobseeker${setIndex}`;
          break;
        default:
          role = 'UNKNOWN';
          username = `unknown${setIndex}`;
          break;
      }

      return {
        id: index + 1,
        username: username,
        email: `${username}@example.com`,
        role: role
      };
    });

    setRegisteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    // Check if there's updated user data in the location state
    if (location.state && location.state.updatedUser) {
      const updatedUser = location.state.updatedUser;
      setRegisteredUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === updatedUser.id ? updatedUser : user
        )
      );
      // Clear the location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleDelete = (userId) => {
    setRegisteredUsers(registeredUsers.filter(user => user.id !== userId));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = registeredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="registered-members-container">
      <h2>Registered Members</h2>
      <button className="back-button" onClick={() => navigate('/admin_dashboard')}>Back to Dashboard</button>
      {registeredUsers.length === 0 ? (
        <p>No registered users found.</p>
      ) : (
        <>
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
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button 
                      className="update-button"
                      onClick={() => navigate(`/admin_dashboard/update_user/${user.id}`, { state: { user } })}
                    >
                      Update
                    </button>
                    <button 
                      className="delete-button"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: Math.ceil(registeredUsers.length / usersPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RegisteredMembers;