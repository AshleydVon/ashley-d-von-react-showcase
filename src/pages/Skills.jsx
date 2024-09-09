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
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>DOM Manipulation</li>
            <li>APIs</li>
            <li>JQuery</li>
            <li>JSON</li>
            <li>AJAX</li>
            <li>Node.js</li>
            <li>ES6</li>
            <li>Object-Oriented Programming</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>Sequelize</li>
            <li>Model-View-Controller (MVC) Paradigm</li>
            <li>Testing</li>
            <li>Agile Development</li>
            <li>Team Collaboration</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>MERN Stack (MongoDB, Express, React, Node)</li>
            <li>Computer Science Fundamentals</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Skills;
