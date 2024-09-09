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
          <div className="project-grid">
            <div className="project-column">
              <div className="project">
                <h3>J.A.T.E. (Just Another Text Editor)</h3>
                <p>
                  J.A.T.E. is a Progressive Web Application (PWA) that functions as a text editor within the browser. 
                  It supports offline functionality and uses IndexedDB for data persistence, allowing users to create 
                  and save notes or code snippets even without an internet connection.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Express.js, IndexedDB, idb, Webpack, WebpackPwaManifest, Workbox, dotenv</li>
                  <li><a href="https://github.com/AshleydVon/Editorium-PWA" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://editorium-pwa-10.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>Crowdfunding Platform</h3>
                <p>
                  This is a crowdfunding web application where users can create, view, and fund projects. Built using Node.js, 
                  Express.js, Sequelize ORM, and Handlebars.js, it features user authentication, project management, and funding 
                  capabilities.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Express.js, Sequelize ORM, PostgreSQL, Handlebars.js, bcrypt, express-session, dotenv</li>
                  <li><a href="https://github.com/AshleydVon/crowdfunding-platform" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">Live Demo (Local)</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>Sorting Algorithms</h3>
                <p>
                  Implementations of various sorting algorithms including Bubble Sort, Quick Sort, and Merge Sort. This project 
                  demonstrates proficiency in algorithm design and code efficiency.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> JavaScript</li>
                  <li><a href="https://github.com/AshleydVon/sorting-algorithms" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>E-Commerce Back-End</h3>
                <p>
                  This project builds the back end for an e-commerce site with Express.js and Sequelize, interfacing with a 
                  PostgreSQL database to handle categories, products, and tags.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Express.js, Sequelize, PostgreSQL, dotenv</li>
                  <li><a href="https://github.com/AshleydVon/-E-Commerce-Back-End" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://github.com/AshleydVon/-E-Commerce-Back-End" target="_blank" rel="noopener noreferrer">Live Demo (Local)</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>Understanding Email Validation Regex</h3>
                <p>
                  A tutorial breaking down a regex used for validating email addresses. It covers components like anchors, 
                  quantifiers, character classes, and more.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Regular Expressions</li>
                  <li><a href="https://gist.github.com/AshleydVon/c5a529302e78a7aca20a25413f42a949" target="_blank" rel="noopener noreferrer">Full Gist</a></li>
                </ul>
              </div>
            </div>

            <div className="project-column">
              <div className="project">
                <h3>README Generator</h3>
                <p>
                  A command-line application that generates a professional README.md file based on user input. This tool aids 
                  developers in creating well-structured project documentation.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Inquirer, Jest</li>
                  <li><a href="https://github.com/AshleydVon/README" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://ashleydvon.github.io/README/" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>Thought Stream API</h3>
                <p>
                  A scalable social network API that allows users to share thoughts, react to posts, and manage friend lists, 
                  built with Node.js, Express.js, MongoDB, and Mongoose.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Express.js, MongoDB, Mongoose, bcrypt, express-session, dotenv</li>
                  <li><a href="https://github.com/AshleydVon/thought-connect-api" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://www.loom.com/share/d605c948e0764844bba482b07e38afb1?sid=8e294bf8-6c08-4c33-ab34-40af2ba6fe0e" target="_blank" rel="noopener noreferrer">Walkthrough Video</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>The Tech Blog</h3>
                <p>
                  A CMS-style blog site where developers can publish posts and comment on others’ posts, utilizing MVC, Handlebars.js, 
                  Sequelize, and express-session for authentication.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Express.js, PostgreSQL, Sequelize ORM, Handlebars.js, express-session</li>
                  <li><a href="https://github.com/AshleydVon/the-tech-blog" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>SVG Logo Maker</h3>
                <p>
                  A Node.js command-line application that generates an SVG logo based on user input for text, shape, and colors.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> Node.js, Inquirer, Jest</li>
                  <li><a href="https://github.com/AshleydVon/SVG-Logo-Maker" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://ashleydvon.github.io/SVG-Logo-Maker/" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
              </div>

              <div className="project">
                <h3>TravelWise</h3>
                <p>
                  The Travel Weather App provides weather information and tourist activities for a specified location. Users can 
                  enter a location and date range to get forecasts and explore local activities. Includes search history functionality.
                </p>
                <ul>
                  <li><strong>Technologies Used:</strong> HTML, CSS, JavaScript, OpenWeatherMap API, Visual Crossing Weather API, Amadeus API, Unsplash API, Foundation framework</li>
                  <li><a href="https://github.com/AshleydVon/TravelWise" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://ashleydvon.github.io/TravelWise/" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                  <li><strong>Project Creators:</strong> Ashley Von (@AshleydVon), Florian Suess (@Flo2009), Christopher Chhim (@Christopher-Chhim)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
