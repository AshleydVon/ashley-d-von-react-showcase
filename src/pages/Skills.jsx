// Skills.jsx
import React from 'react';
// Correct the path and file name for the image
import skillsImage from '../assets/images/paulina-milde-jachowska-XO9WoYVtf3w-unsplash.jpg';

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
