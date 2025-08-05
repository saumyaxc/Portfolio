// Experience.jsx

import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "Front-End Developer Intern",
      company: "California Seismic",
      date: "June 2025 – Present",
      location: "California, USA",
      bullets: [
        "Building a math-heavy web app (Diaphragm Solver) to dynamically visualize seismic load data using React, JavaScript, and Figma.",
        "Participating in agile sprints, code reviews, and design discussions to maintain scalable and accessible UI features."
      ]
    },
    {
      role: "Student Research Assistant",
      company: "NASA Ames Research Center (SJSU Research Foundation)",
      date: "June 2024 – Sept. 2024",
      location: "Mountain View, CA",
      bullets: [
        "Designed and revised sequence diagrams for various airport transfer scenarios using PlantUML, for both crewed and uncrewed flight operations.",
        "Automated diagram generation using Python scripts, improving workflow efficiency by 30%."
      ]
    },
    {
      role: "Web Developer",
      company: "ACM@UCR",
      date: "April 2024 – June 2024",
      location: "Riverside, CA",
      bullets: [
        "Built full-stack features using React (frontend) and Node.js (backend) for dynamic web apps.",
        "Translated Figma design concepts into seamless, user-friendly interfaces.",
        "Used Git and VSCode for version control and development."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <h3 className="experience-role">{exp.role}</h3>
            <div className="experience-meta">
              <span className="company">{exp.company}</span> | <span className="date">{exp.date}</span> | <span className="location">{exp.location}</span>
            </div>
            <ul className="experience-bullets">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
