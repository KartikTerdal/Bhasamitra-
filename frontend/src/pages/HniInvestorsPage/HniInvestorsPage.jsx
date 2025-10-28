import React, { forwardRef } from 'react';
import './HniInvestorsPage.css';

const HniInvestorsPage = forwardRef(({ dataColor }, ref) => {
  return (
    <section id="hni"  className="hni-section" data-aos="zoom-in-up">
      <h2 className="hni-title">HNI & Family Office Investors</h2>
      <p className="hni-subtext">Join a curated network of investors accessing verified growth-stage opportunities.</p>

      <div className="hni-cards">
        <div className="hni-card hover-fadeup">
          <h3>👤 Personal Info</h3>
          <p>Provide your name, contact details, and location to get started.</p>
        </div>

        <div className="hni-card hover-fadeup-delay">
          <h3>📌 Investment Preferences</h3>
          <p>Choose your sectors, ticket size, expected ROI, and geographies of interest.</p>
        </div>

        <div className="hni-card hover-fadeup-delay2">
          <h3>🛡️ Compliance & NDA</h3>
          <p>Upload PAN, complete KYC, and sign NDAs for secure participation.</p>
        </div>
      </div>

      <div className="submit-button-wrap">
        <button className="submit-button">Submit Profile</button>
      </div>
    </section>
  );
});
HniInvestorsPage.displayName = "hni";

export default HniInvestorsPage;
