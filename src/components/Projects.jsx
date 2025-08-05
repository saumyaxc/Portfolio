import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'California Seismic Website',
      description: 'Website for California Seismic, free educational resouce for the seismic exam.',
      tech: ['React', 'JavaScript', 'Figma'],
      link: 'https://github.com/SeijDeLeon/California-Seismic',
      image: require('../assets/images/california-seismic.png')
    },
    {
      title: 'Gamespawn Website',
      description: 'Website for UCR Gamespawn club, showcasing events and resources.',
      tech: ['Javascript', 'Next.js', 'Tailwind CSS'],
      link: 'https://github.com/gamespawn/gamespawn-website',
      image: require('../assets/images/gamespawn.png')
    },
    {
      title: 'Exoplanet Detection',
      description: 'Used machine learning to detect exoplanets from light curve data.',
      tech: ['Python', 'TensorFlow', 'Keras'],
      link: 'https://github.com/saumyaxc/Exoplanet-Detection',
      image: require('../assets/images/exoplanet.jpg')
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-card-container">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.image} alt={`${proj.title} screenshot`} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Code
            </a>
          </div>
        ))}
      </div>
      <a href="https://github.com/saumyaxc" target="_blank" rel="noopener noreferrer" className="github-button">
        See More on GitHub
      </a>
    </section>
  );
}
