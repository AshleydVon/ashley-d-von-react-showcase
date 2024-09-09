import React from 'react';
import projectsImage from '@/assets/images/salah-ait-mokhtar-y7QJpueJX18-unsplash.jpg';

function Projects() {
  return (
    <div className="projects">
      <header className="hero">
        <img src={projectsImage} alt="Projects header" className="hero-image" />
        <div className="hero-content">
          <h1>My Projects</h1>
        </div>
      </header>
      <main>
        <section>
          <h2>Project List</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
          </div>
          {/* Add more projects */}
        </section>
      </main>
    </div>
  );
}

export default Projects;
