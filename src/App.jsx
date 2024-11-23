import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import MainLayout from './MainLayout/MainLayout';
import UserInitiation from './UserInitiation/UserInitiation'; 
import UserForm from './UserForm/UserForm'; 
import UserDetails from './UserDetails/UserDetails';     // Assuming you have a MainLayout component

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

      </Routes>
    </Router>
  );
};

export default App;
