import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserForm.css';

const UserForm = ({ user, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        middleName: user.middleName || '',
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: '',
        confirmPassword: '',
        dob: user.dob,
        address: user.address,
      });
    }
  }, [user]);

  const validateForm = () => {
  let isValid = true;

  // Check all required fields
  Object.keys(formData).forEach((key) => {
    if (
      !formData[key] &&
      (key !== 'middleName' && key !== 'password' && key !== 'confirmPassword')
    ) {
      isValid = false;
    }
  });

  // Check if errors exist
  Object.values(errors).forEach((error) => {
    if (error) isValid = false;
  });

  setIsFormValid(isValid);
};

const handleChange = (event) => {
  const { name, value } = event.target;

  // Update formData
  setFormData((prevData) => {
    const updatedFormData = { ...prevData, [name]: value };

    // Validate field
    validateField(name, value);

    // Dynamically validate form after updating field
    setTimeout(() => validateForm(updatedFormData), 0);

    return updatedFormData;
  });
};


  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value) error = 'First Name is required';
        break;
      case 'lastName':
        if (!value) error = 'Last Name is required';
        break;
      case 'username':
        if (!value) error = 'Username is required';
        break;
      case 'email':
        if (!value || !/\S+@\S+\.\S+/.test(value)) error = 'Valid Email is required';
        break;
      case 'password':
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          error = 'Passwords do not match';
        }
        break;
      case 'confirmPassword':
        if (formData.password && value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'dob':
        if (!value) error = 'Date of Birth is required';
        break;
      case 'address':
        if (!value) error = 'Address is required';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });

//     // Validate the field dynamically
//     validateField(name, value);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     Object.keys(formData).forEach((key) => {
//       validateField(key, formData[key]);
//       if (errors[key]) isValid = false;
//     });

//     setIsFormValid(isValid);
//   };

  const handleSubmit = async (event) => {
  event.preventDefault();
  validateForm();

  if (isFormValid) {
    try {
      // Make a POST request to the backend to create a user
      const response = await axios.post('http://localhost:5000/api/auth/users', formData);

      if (response.status === 201) {
        alert('User created successfully');
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          dob: '',
          address: '',
        });
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Error creating user');
      } else {
        alert('An error occurred while submitting the form.');
      }
    }
  }
};

  return (
    <div className="user-form-container">
      <h2>{user ? 'Modify User' : 'Create User'}</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {!user && (
          <>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          {errors.dob && <span className="error-message">{errors.dob}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn" disabled={!isFormValid}>
            {user ? 'Save Changes' : 'Create User'}
          </button>
          <button type="button" onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
