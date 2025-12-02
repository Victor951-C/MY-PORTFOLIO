import React from 'react';

function Projects({ className }) {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React.',
      tech: ['React', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/portfolio', // Replace with your GitHub link
      type: 'github',
    },
    {
      id: 2,
      title: 'E-commerce Backend',
      description: 'A backend for an e-commerce platform using Node.js and Express.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/ecommerce-backend', // Replace with your GitHub link
      type: 'github',
    },
    {
      id: 3,
      title: 'Local Data Analysis Tool',
      description: 'A Python script to analyze local CSV data and generate reports.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      githubLink: null,
      type: 'local',
    },
  ];

  return (
    <section id="projects" className={className}>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
