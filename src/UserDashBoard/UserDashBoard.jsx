import React from 'react';
import FlashNews from '../FlashNews/FlashNews'; // Import FlashNews component
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import './UserDashBoard.css';
import MainLayout from '../MainLayout/MainLayout';

const UserDashboard = () => {
  // Example Flash News data
  const exampleNews = "Breaking News: New feature released! Check out the latest updates now.";

  // Example Notifications data
  const exampleNotifications = [
    { message: "Your profile has been updated." },
    { message: "New event scheduled for next week." },
    { message: "Maintenance window scheduled for this weekend." }
  ];

  return (
    <div className="dashboard-wrapper">
        <MainLayout />
      <div className="dashboard-container">
        <h1>User Dashboard</h1>

        {/* Flash News Component with example news */}
        <FlashNews news={exampleNews} />

        {/* Notifications Component with example notifications */}
        <Notifications notifications={exampleNotifications} />
      </div>
    </div>
  );
};

export default UserDashboard;
