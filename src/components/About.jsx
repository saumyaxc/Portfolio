import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p className="about-intro">
            I'm a Computer Science student at UC Riverside, passionate about building software that solves real-world problems.
            I love working with AI/ML, front-end development, and scalable infrastructure.
          </p>
          <p className="about-values">
            My goal is to combine creativity with technology to make meaningful tools. Whether it's designing a UI or automating a process, I'm always driven to learn and improve.
          </p>

          <ul className="about-skills">
            <li>💻 Languages: JavaScript, Python, C++, Rust</li>
            <li>🛠️ Tools: React, Node.js, AWS, Git, Docker</li>
            <li>🧠 Interests: Web Dev, AI/ML, Cloud Infrastructure</li>
          </ul>

          <ul className="about-fun-facts">
            <li>🧋 I run on boba and late-night debugging</li>
            <li>🎶 Huge fan of The Weeknd — saw him live July 8!</li>
            <li>🌱 Currently learning: TypeScript + Next.js</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
