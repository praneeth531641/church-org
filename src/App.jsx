import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import MainLayout from './MainLayout/MainLayout';
import UserInitiation from './UserInitiation/UserInitiation'; 
import UserForm from './UserForm/UserForm'; 
import UserDetails from './UserDetails/UserDetails';     // Assuming you have a MainLayout component
import UserDashboard from './UserDashBoard/UserDashBoard';
import FlashNews from './FlashNews/FlashNews';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/admin/user-initiation" element={<UserInitiation />} />
        <Route path="/admin/user-initiation/user-form" element={<UserForm />} />
        <Route path="/admin/user-initiation/user-details" element={<UserDetails />} />
         <Route path="/user/dashBoard" element={<UserDashboard />} />
         <Route path="/news" element={<FlashNews />} />

      </Routes>
    </Router>
  );
};

export default App;
