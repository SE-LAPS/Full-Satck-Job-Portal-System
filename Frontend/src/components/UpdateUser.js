import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../css/UpdateUser.css';

const UpdateUser = () => {
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    email: '',
    role: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.user) {
      setUserData(location.state.user);
    } else if (id) {
      // If we don't have user data in location state, we could fetch it using the id
      // For now, we'll just set the id in the userData
      setUserData(prevData => ({ ...prevData, id }));
    }
  }, [location.state, id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate back to the registered members page with the updated user data
    navigate('/register-members', { state: { updatedUser: userData } });
  };

  return (
    <div className="update-user-container">
      <h2>Update User (ID: {userData.id})</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          required
        />
        <div>
          <button type="submit" className="update-button">Update</button>
          <button type="button" onClick={() => navigate('/register-members')} className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;