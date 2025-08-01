import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/saumya-chourasia" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/saumyaxc" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:saumyachourasia04@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text"> {new Date().getFullYear()} Saumya Chourasia</p>
    </footer>
  );
}