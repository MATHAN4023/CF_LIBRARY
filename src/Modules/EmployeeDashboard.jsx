import React, { useState } from 'react';
import './EmployeeDashboard.css'; // Add styles for responsiveness
import { Box } from '@mui/material';

const EmployeeDashboard = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [leave, setLeave] = useState({ from: '', to: '', reason: '' });
  const [profile, setProfile] = useState({
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'john.doe@example.com',
  });

  const handleCheckIn = () => setIsCheckedIn(true);
  const handleCheckOut = () => setIsCheckedIn(false);

  const handleLeaveChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
  };

  const handleApplyLeave = (e) => {
    e.preventDefault();
    // Handle leave application logic here
    console.log('Leave applied:', leave);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
      <div className="dashboard-container">
        <div className="profile-section">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
          <h2>{profile.name}</h2>
          <p>{profile.position}</p>
          <p>{profile.email}</p>
        </div>

        <div className="checkin-section">
          <button onClick={isCheckedIn ? handleCheckOut : handleCheckIn}>
            {isCheckedIn ? 'Check-Out' : 'Check-In'}
          </button>
        </div>

        <div className="leave-section">
          <h3>Apply for Leave</h3>
          <form onSubmit={handleApplyLeave}>
            <label>
              From:
              <input type="date" name="from" value={leave.from} onChange={handleLeaveChange} required />
            </label>
            <label>
              To:
              <input type="date" name="to" value={leave.to} onChange={handleLeaveChange} required />
            </label>
            <label>
              Reason:
              <textarea name="reason" value={leave.reason} onChange={handleLeaveChange} required></textarea>
            </label>
            <button type="submit">Apply</button>
          </form>
        </div>
      </div>
    </ Box>

  );
};

export default EmployeeDashboard;
