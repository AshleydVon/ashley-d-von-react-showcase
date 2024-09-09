import React from 'react';
import skillsImage from '../assets/images/salah-ait-mokhtar-y7QJpueJX18-unsplash.jpg';

function Skills() {
  return (
    <div className="skills">
      <header className="hero">
        <img src={skillsImage} alt="Skills header" className="hero-image" />
        <div className="hero-content">
          <h1>My Skills</h1>
        </div>
      </header>
      <main>
        <section>
          <h2>Skills List</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            {/* Add more skills */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Skills;