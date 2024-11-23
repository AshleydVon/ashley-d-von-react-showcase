import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const projects = [
    {
      title: "J.A.T.E. (Just Another Text Editor)",
      description: "J.A.T.E. is a Progressive Web Application (PWA) that functions as a text editor within the browser. It supports offline functionality and uses IndexedDB for data persistence, allowing users to create and save notes or code snippets even without an internet connection.",
      technologies: "Node.js, Express.js, IndexedDB, idb, Webpack, WebpackPwaManifest, Workbox, dotenv",
      github: "https://github.com/AshleydVon/Editorium-PWA",
      demo: "https://editorium-pwa-10.onrender.com"
    },
    {
      title: "Crowdfunding Platform",
      description: "This is a crowdfunding web application where users can create, view, and fund projects. Built using Node.js, Express.js, Sequelize ORM, and Handlebars.js, it features user authentication, project management, and funding capabilities.",
      technologies: "Node.js, Express.js, Sequelize ORM, PostgreSQL, Handlebars.js, bcrypt, express-session, dotenv",
      github: "https://github.com/AshleydVon/crowdfunding-platform",
    },
    {
      title: "Sorting Algorithms",
      description: "Implementations of various sorting algorithms including Bubble Sort, Quick Sort, and Merge Sort. This project demonstrates proficiency in algorithm design and code efficiency.",
      technologies: "JavaScript",
      github: "https://github.com/AshleydVon/sorting-algorithms",
      demo: null
    },
    {
      title: "E-Commerce Back-End",
      description: "This project builds the back end for an e-commerce site with Express.js and Sequelize, interfacing with a PostgreSQL database to handle categories, products, and tags.",
      technologies: "Node.js, Express.js, Sequelize, PostgreSQL, dotenv",
      github: "https://github.com/AshleydVon/-E-Commerce-Back-End",
      demo: "https://github.com/AshleydVon/-E-Commerce-Back-End"
    },
    {
      title: "Understanding Email Validation Regex",
      description: "A tutorial breaking down a regex used for validating email addresses. It covers components like anchors, quantifiers, character classes, and more.",
      technologies: "Regular Expressions",
      github: "https://gist.github.com/AshleydVon/c5a529302e78a7aca20a25413f42a949",
      demo: null
    },
    {
      title: "README Generator",
      description: "A command-line application that generates a professional README.md file based on user input. This tool aids developers in creating well-structured project documentation.",
      technologies: "Node.js, Inquirer, Jest",
      github: "https://github.com/AshleydVon/README",
      demo: "https://ashleydvon.github.io/README/"
    },
    {
      title: "Thought Stream API",
      description: "A scalable social network API that allows users to share thoughts, react to posts, and manage friend lists, built with Node.js, Express.js, MongoDB, and Mongoose.",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, bcrypt, express-session, dotenv",
      github: "https://github.com/AshleydVon/thought-connect-api",
      demo: "https://www.loom.com/share/d605c948e0764844bba482b07e38afb1?sid=8e294bf8-6c08-4c33-ab34-40af2ba6fe0e"
    },
    {
      title: "The Tech Blog",
      description: "A CMS-style blog site where developers can publish posts and comment on others' posts, utilizing MVC, Handlebars.js, Sequelize, and express-session for authentication.",
      technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Handlebars.js, express-session",
      github: "https://github.com/AshleydVon/the-tech-blog",
      demo: null
    },
    {
      title: "SVG Logo Maker",
      description: "A Node.js command-line application that generates an SVG logo based on user input for text, shape, and colors.",
      technologies: "Node.js, Inquirer, Jest",
      github: "https://github.com/AshleydVon/SVG-Logo-Maker",
      demo: "https://ashleydvon.github.io/SVG-Logo-Maker/"
    },
    {
      title: "TravelWise",
      description: "The Travel Weather App provides weather information and tourist activities for a specified location. Users can enter a location and date range to get forecasts and explore local activities. Includes search history functionality.",
      technologies: "HTML, CSS, JavaScript, OpenWeatherMap API, Visual Crossing Weather API, Amadeus API, Unsplash API, Foundation framework",
      github: "https://github.com/AshleydVon/TravelWise",
      demo: "https://ashleydvon.github.io/TravelWise/"
    }
  ];

  return (
    <div className="projects-page">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Ashley D Von</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <header className="projects-hero">
        <Container>
          <div className="projects-hero-content text-center">
            <h1 className="section-title">My Projects</h1>
            <p>A collection of my development work</p>
          </div>
        </Container>
      </header>

      {/* Projects List */}
      <main className="projects-main">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project, index) => (
              <Col key={index}>
                <Card className="project-card h-100">
                  <Card.Body>
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="technologies">
                      <strong>Technologies:</strong> {project.technologies}
                    </div>
                  </Card.Body>
                  <Card.Footer className="project-footer">
                    <Button
                      variant="primary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      GitHub
                    </Button>
                    {project.demo && (
                      <Button
                        variant="secondary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      {/* Footer */}
      <footer className="footer-custom">
        <Container>
          <Row>
            <Col className="text-center">
              <p>Connect with me:</p>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://github.com/AshleydVon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ashley-von-0600a9239/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:AshleydVon630@gmail.com">
                    Email: AshleydVon630@gmail.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}


export default Projects;