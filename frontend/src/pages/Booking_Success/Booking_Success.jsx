import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking_Success.css';

const Booking_Success = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-success-container">
      <div className="booking-success-card">
        <h1>🎉 Success!</h1>
        <p>Your application has been successfully submitted.</p>
        <p>Thank you for choosing us! 🎊</p>
        <button className="go-back-btn" onClick={() => navigate('/')}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Booking_Success;
