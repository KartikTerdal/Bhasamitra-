import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserTypePage.css";

const UserTypePage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === "Influencer") {
      navigate("/infu");
    } else if (selectedOption === "Brand") {
      navigate("/brand");
    }
  };

  return (
    <div className="survey-container">
      <h2>Are you an Influencer or a Brand?</h2>
      <p>Please select one of the following options.</p>
      <div className="survey-options">
        {["Influencer", "Brand"].map((option) => (
          <button
            key={option}
            className={`survey-option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="continue-btn" onClick={handleSubmit} disabled={!selectedOption}>
        Continue
      </button>
      <p className="skip-btn" onClick={() => navigate("/")}>Skip</p>
    </div>
  );
};

export default UserTypePage;
