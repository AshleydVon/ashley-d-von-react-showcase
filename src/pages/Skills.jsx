import React from 'react';

import skillsImage from '../assets/images/paulina-milde-jachowska-XO9WoYVtf3w-unsplash.jpg';
import { Container, Row, Col, ListGroup, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  const skillsList = [
    "HTML", "CSS", "Git", "JavaScript", "Bootstrap", "DOM Manipulation",
    "APIs", "JQuery", "JSON", "AJAX", "Node.js", "ES6",
    "Object-Oriented Programming", "Express.js", "SQL", "Sequelize",
    "Model-View-Controller (MVC) Paradigm", "Testing", "Agile Development",
    "Team Collaboration", "Progressive Web Applications", "React",
    "NoSQL", "MongoDB", "MERN Stack (MongoDB, Express, React, Node)",
    "Computer Science Fundamentals"
  ];

  const midpoint = Math.ceil(skillsList.length / 2);
  const leftColumnSkills = skillsList.slice(0, midpoint);
  const rightColumnSkills = skillsList.slice(midpoint);

  return (
    <div className="skills">
      <Navbar expand="lg" className="navbar-custom py-3">
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

      <header className="hero">
        <img src={skillsImage} alt="Skills header" className="hero-image" />
        <div className="hero-content">
          <h1>My Skills</h1>
        </div>
      </header>

      <main>
        <Container className="my-5">
          <h2 className="text-center mb-4">Skills List</h2>
          <Row>
            <Col md={6}>
              <ListGroup>
                {leftColumnSkills.map((skill, index) => (
                  <ListGroup.Item key={index}>{skill}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup>
                {rightColumnSkills.map((skill, index) => (
                  <ListGroup.Item key={index + midpoint}>{skill}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="footer-custom py-4">
        <Container>
          <Row>
            <Col className="text-center">
              <p>Connect with me:</p>
              <ul className="list-unstyled">
                <li><a href="https://github.com/AshleydVon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:AshleydVon630@gmail.com">Email: AshleydVon630@gmail.com</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Skills;