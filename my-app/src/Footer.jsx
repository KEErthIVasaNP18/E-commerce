import React from 'react';
import { SiGmail } from "react-icons/si";
import { CiLinkedin, CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import './footer.css'; // Make sure this CSS is created and imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>

      <div className="footer-text">
        <p>18 / 702, Arunachaleswarar Nagar, Kovil Pappakudi, Madurai-18</p>
        <div className="footer-phone">
          <CiPhone />
          <span>+91 8838781507</span>
        </div>
        <p className="copyright">
          &copy; 2025 <strong>Shoppiee</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
