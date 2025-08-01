import React from 'react';
import './About.css';
import { SiJavascript, SiPython, SiCplusplus, SiReact, SiNodedotjs, SiAmazonwebservices, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-icons">
          {/* <h4>Languages & Tools:</h4> */}
          <div className="icon-grid">
            <SiJavascript title="JavaScript" />
            <FaJava title="Java" />
            <SiPython title="Python" />
            <SiCplusplus title="C++" />
            <SiReact title="React" />
            <SiNodedotjs title="Node.js" />
            <SiAmazonwebservices title="AWS" />
            <SiGit title="Git" />
          </div>
        </div>

        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p className="about-intro">
            I'm a fourth year undergraduate student at UC Riverside, studying Computer Science, with a minor in Business Analytics.
            I'm passionate about building software that solves real-world problems, and I love working with AI/ML, front-end development, and scalable infrastructure.
          </p>
          <p className="about-values">
            My goal is to combine creativity with technology to make meaningful tools. Whether it's designing a UI or automating a process, I'm always driven to learn and improve.
          </p>

          <ul className="about-skills">
            <li>💻 Languages: JavaScript, Python, C++, Rust</li>
            <li>🛠️ Tools: React, Node.js, AWS, Git</li>
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

