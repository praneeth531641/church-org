import React from 'react';
import './UserDetails.css';


function UserDetails({ userDetails, onModifyUser, onSuspendUser, onCreateUser, selectedUserId }) {
  return (
    <div className="user-details-container">
      {/* Action Buttons on top */}
      <div className="action-buttons">
        <button onClick={onCreateUser} className="btn btn-primary">
          Create User
        </button>

        {userDetails && (
          <>
            <button onClick={() => onModifyUser(selectedUserId)} className="btn btn-secondary">
              Modify User
            </button>

            <button onClick={() => onSuspendUser(selectedUserId)} className="btn btn-danger">
              Suspend User
            </button>
          </>
        )}
      </div>

      {/* User Details below buttons */}
      {userDetails && (
        <div className="user-details">
          <h3>User Details</h3>
          <p>
            <strong>First Name:</strong> {userDetails.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userDetails.lastName}
          </p>
          <p>
            <strong>Email:</strong> {userDetails.email}
          </p>
          <p>
            <strong>Username:</strong> {userDetails.username}
          </p>
          <p>
            <strong>Created On:</strong> {userDetails.createdAt}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
