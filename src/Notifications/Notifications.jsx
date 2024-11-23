// Notifications.js
import React from 'react';
import './Notifications.css'; // You can create a CSS file to style this component

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications-container">
      <h3>Notifications</h3>
      <ul className="notifications-list">
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
