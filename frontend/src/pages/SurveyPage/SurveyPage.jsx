import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SurveyPage.css";

const SurveyPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      // Navigate to the next step after selection
      navigate("/usertype");
    }
  };

  return (
    <div className="survey-container">
      <h2>How did you hear about us?</h2>
      <p>Please select one of the following options.</p>
      <div className="survey-options">
        {["Social Media", "Search Engine", "Friend or Colleague", "Advertisement", "Other"].map((option) => (
          <button
            key={option}
            className={`survey-option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="continue-btn" onClick={handleSubmit}>Continue</button>
      <p className="skip-btn" onClick={() => navigate("/usertype")}>Skip</p>
    </div>
  );
};

export default SurveyPage;
