import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

function LoginForm() {
  const [activeTab, setActiveTab] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Active Tab:', activeTab);
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  const isFormValid = isUsernameValid && isPasswordValid;

  return (
    <div className="login-page"> {/* Adding login-page class here */}
      <div className="login-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'user' ? 'active' : ''}`}
              onClick={() => handleTabChange('user')}
            >
              <FaUser /> User Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => handleTabChange('admin')}
            >
              <FaLock /> Admin Login
            </button>
          </li>
        </ul>

        {activeTab === 'user' ? (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  placeholder="Enter Username"
                />
              </div>
              {!isUsernameValid && username.length > 0 && (
                <div className="error-message">Username is required</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Enter Password"
                />
              </div>
              {!isPasswordValid && password.length > 0 && (
                <div className="error-message">Password must be at least 6 characters long</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
            >
              Login
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Admin Username:</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  placeholder="Enter Admin Username"
                />
              </div>
              {!isUsernameValid && username.length > 0 && (
                <div className="error-message">Username is required</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Admin Password:</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Enter Admin Password"
                />
              </div>
              {!isPasswordValid && password.length > 0 && (
                <div className="error-message">Password must be at least 6 characters long</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
