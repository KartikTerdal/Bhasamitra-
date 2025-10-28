import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-bg"></div>

      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-brand">Bhasa </h3>
          <p>Bring your idea to reality with no limits.</p> 
        </div>

        <div className="footer-center">
          <h4>Navigation</h4>
          <ul>
            <li>How we do it</li>

            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Socials</h4>
          <ul>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-logo">
        <h1>Bhasa </h1>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved. © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
