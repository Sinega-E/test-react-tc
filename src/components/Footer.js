import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Us Section */}
          <div className="footer-section">
            <h5>About Us</h5>
            <p>
              Affordable Skill Development for Everyone.
              The Talky Community was established with a mission to provide high-quality skill development courses at an affordable price.
              For many individuals, particularly those in rural areas or facing financial challenges, accessing traditional training programs is often out of reach.
              Recognizing this, we designed a platform that ensures accessibility and benefits for everyone.
              Initially created exclusively for our YouTube subscribers, Talky Community has now expanded its reach to support a broader audience beyond our channel.
              Our goal is to bridge the gap in education and skill training, empowering individuals to learn and grow across diverse areas such as language proficiency, professional skills, technology, communication, and more—without financial constraints.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="footer-section">
            <h5>Contact Us</h5>
            <p><b>Email: </b><a href="mailto:talkycommunity@gmail.com">talkycommunity@gmail.com</a></p>
            <p><b>Phone: </b>+123 456 7890</p>
          </div>

          {/* Quick Links Section (if needed, currently commented out) */}
          {/* <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div> */}
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://wa.me/9364284477" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Talky Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
