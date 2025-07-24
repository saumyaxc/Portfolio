import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'about'];
      const scrollY = window.scrollY + 200;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on first load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="nav">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Me</a>
        </nav>
        <a href="#contact" className="header-button">Contact Me</a>
      </div>
    </header>
  );
}
