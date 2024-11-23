import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { FaUser, FaCogs,FaCog, FaUserShield, FaTachometerAlt, FaUsersCog, FaAddressCard, FaShieldAlt, FaBell, FaCalendarCheck, FaFileAlt, FaQuestionCircle } from 'react-icons/fa'; // Import icons from React Icons
import './MainLayout.css';

const MainLayout = () => {
  const [showAdminSubNav, setShowAdminSubNav] = useState(false);
  const [showUserSubNav, setShowUserSubNav] = useState(false);
  const [showSettingsSubNav, setShowSettingsSubNav] = useState(false);

  // Toggle for Admin
  const handleAdminClick = () => setShowAdminSubNav(prevState => !prevState);

  // Toggle for User
  const handleUserClick = () => setShowUserSubNav(prevState => !prevState);

  // Toggle for Settings
  const handleSettingsClick = () => setShowSettingsSubNav(prevState => !prevState);

  return (
    <div className="main-layout">
      <Container fluid>
        <Row className="h-100">
          {/* Left Sidebar */}
          <Col sm={3} className="sidebar">
            <ListGroup variant="flush">
              {/* User Module */}
              <ListGroup.Item className="sidebar-item" onClick={handleUserClick}>
                <FaUser size={20} />
                <span className="sidebar-item-text"> User</span>
              </ListGroup.Item>
              {showUserSubNav && (
                <div className="sub-nav">
                  <ListGroup variant="flush" className="sub-nav-list">
                    <ListGroup.Item as={Link} to="/user/dashBoard" className="sidebar-item sub-nav-item">
                      <FaCalendarCheck size={20} />
                      <span className="sidebar-item-text">User Dashboard</span>
                    </ListGroup.Item>
                    {/* <ListGroup.Item as={Link} to="/user/notifications" className="sidebar-item sub-nav-item">
                      <FaBell size={20} />
                      <span className="sidebar-item-text"> Notifications</span>
                    </ListGroup.Item> */}
                    <ListGroup.Item as={Link} to="/user/event-scheduling" className="sidebar-item sub-nav-item">
                      <FaCalendarCheck size={20} />
                      <span className="sidebar-item-text"> Event Scheduling</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/user/report-form" className="sidebar-item sub-nav-item">
                      <FaFileAlt size={20} />
                      <span className="sidebar-item-text"> Report Form</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/user/help-support" className="sidebar-item sub-nav-item">
                      <FaQuestionCircle size={20} />
                      <span className="sidebar-item-text"> Help & Support</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/user/account-settings" className="sidebar-item sub-nav-item">
                      <FaShieldAlt size={20} />
                      <span className="sidebar-item-text"> Account Settings</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              )}

              {/* Settings */}
             
              {/* Admin Module with Sub-navigation */}
              <ListGroup.Item className="sidebar-item" onClick={handleAdminClick}>
                <FaUserShield size={20} />
                <span className="sidebar-item-text"> Admin</span>
              </ListGroup.Item>
              {showAdminSubNav && (
                <div className="sub-nav">
                  <ListGroup variant="flush" className="sub-nav-list">
                    {/* <ListGroup.Item as={Link} to="/admin/dashboard" className="sidebar-item sub-nav-item">
                      <FaTachometerAlt size={20} />
                      <span className="sidebar-item-text"> Dashboard</span>
                    </ListGroup.Item> */}
                    <ListGroup.Item as={Link} to="/admin/user-initiation" className="sidebar-item sub-nav-item">
                      <FaUsersCog size={20} />
                      <span className="sidebar-item-text"> User Initiation</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/admin/user-management" className="sidebar-item sub-nav-item">
                      <FaAddressCard size={20} />
                      <span className="sidebar-item-text"> User Management</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/admin/roles-permissions" className="sidebar-item sub-nav-item">
                      <FaShieldAlt size={20} />
                      <span className="sidebar-item-text"> Roles & Permissions</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/admin/analytics" className="sidebar-item sub-nav-item">
                      <FaTachometerAlt size={20} />
                      <span className="sidebar-item-text"> Analytics</span>
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} to="/admin/settings" className="sidebar-item sub-nav-item">
                      <FaCog size={20} />
                      <span className="sidebar-item-text"> Admin Settings</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              )}
            </ListGroup>
          </Col>

          {/* Main Content Area */}
          <Col sm={9} className="content-area">
            <div className="content-container">
              <Outlet /> {/* Render child routes here */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;
