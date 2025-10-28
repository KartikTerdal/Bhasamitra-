import React, { useEffect } from 'react';
import  { forwardRef } from 'react';

import './StartupsPage.css';

const StartupsPage = forwardRef(({ dataColor }, ref) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.eligibility-card-one, .eligibility-card-two, .eligibility-card-three');

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        cards.forEach((c) => {
          if (c !== card) c.classList.add('blurred');
        });
      });

      card.addEventListener('mouseleave', () => {
        cards.forEach((c) => c.classList.remove('blurred'));
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  return (
    <section id="startups" className="startups-section" data-aos="fade-up">
      <h2 className="startups-title">Startups & SMEs Eligibility</h2>
      <p className="startups-subtext">Check if your startup qualifies to apply for growth capital.</p>

      <div className="eligibility-cards">
        <div className="eligibility-card-one">
          <h3> ₹3–50 Cr Revenue</h3>
          <p>Your startup must show steady revenue within this range.</p>
        </div>
        <div className="eligibility-card-two">
          <h3> 2+ Years Profitable</h3>
          <p>Only startups with a consistent profit track are eligible.</p>
        </div>
        <div className="eligibility-card-three">
          <h3> Clean Compliance</h3>
          <p>Must be registered with valid GST, CIN, and financial records.</p>
        </div>
      </div>

      <div className="apply-button-wrap">
        <button className="apply-button">Start Application</button>
      </div>
    </section>
  );
});
StartupsPage.displayName = "startups";

export default StartupsPage;
