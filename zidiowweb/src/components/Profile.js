import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Save profile information logic here
    setIsEditing(false);
    // Navigate to resume creation page
    navigate('/resume-creation');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="logo">Resume Builder</div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">About Us</a>
        </div>
      </div>
      <h2>Profile Creation</h2>
      <form className="profile-form">
        <div className="grid-container">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={profile.city}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="input-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={profile.state}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="button-group">
          {isEditing ? (
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button
              type="button"
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;