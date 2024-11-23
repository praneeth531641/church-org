import React, { useState, useEffect } from 'react';
import './UserInitiation.css';
import MainLayout from '../MainLayout/MainLayout';
import UserForm from '../UserForm/UserForm';
import UserDetails from '../UserDetails/UserDetails'; // Import the UserDetails component
import axios from 'axios';

function UserInitiation() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [clickedUserDetails, setClickedUserDetails] = useState(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/usersData');
        setRegisteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleModifyUser = (userId) => {
    const user = registeredUsers.find((user) => user.id === userId);
    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    } else {
      alert('User not found!');
    }
  };

  const handleSuspendUser = (userId) => {
    setRegisteredUsers(registeredUsers.filter((user) => user.id !== userId));
    alert('User suspended!');
  };

  const handleFormSubmit = (newUser) => {
    if (newUser.id) {
      setRegisteredUsers(
        registeredUsers.map((user) => (user.id === newUser.id ? newUser : user))
      );
      alert('User updated successfully!');
    } else {
      newUser.id = registeredUsers.length + 1;
      setRegisteredUsers([...registeredUsers, newUser]);
      alert('User registered successfully!');
    }
    setIsModalOpen(false);
  };

  const handleUserClick = (userId) => {
    const user = registeredUsers.find((user) => user.id === userId);
    setClickedUserDetails(user || null);
  };

  return (
    <div className="user-initiation-container">
      <MainLayout />
      <div className="user-sidebar">
        <div className="user-list">
          <h3>Registered Users</h3>
          <ul>
            {registeredUsers.length > 0 ? (
              registeredUsers.map((user) => (
                <li key={user.id}>
                  <strong>
                    {user.firstName} {user.lastName}
                  </strong>
                  <p>{user.email}</p>
                  <p>Created On: {user.createdAt}</p>
                  <button onClick={() => handleUserClick(user.id)} className="btn btn-info">
                    View Details
                  </button>
                </li>
              ))
            ) : (
              <p>No users registered yet.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Use UserDetails to display user details and actions */}
      <UserDetails
        userDetails={clickedUserDetails}
        onCreateUser={handleCreateUser}
        onModifyUser={handleModifyUser}
        onSuspendUser={handleSuspendUser}
        selectedUserId={selectedUser?.id}
      />

      {/* Modal for UserForm */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedUser ? 'Modify User' : 'Register New User'}</h2>
            <UserForm
              user={selectedUser}
              onSubmit={handleFormSubmit}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInitiation;
