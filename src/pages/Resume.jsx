import React from 'react';
import { Container, ListGroup, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Resume() {
  const openResume = () => {
    window.open('https://bold.pro/my/ashley-d-von-resume', '_blank');
  };

  return (
    <div className="resume page-container">
      <Navbar expand="lg" className="navbar-custom py-3">
        <Container>
          <Navbar.Brand href="/">Ashley D Von</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="resume-content">
        <Container className="mt-5">
          <h2 className="section-title text-center">My Resume</h2>
          <Button
            onClick={openResume}
            variant="primary"
            style={{
              backgroundColor: 'var(--neon-purple)',
              borderColor: 'var(--bright-blue)',
              marginBottom: '2rem'
            }}
          >
            View Resume
          </Button>
          <h3 className="section-title mt-4">Proficiencies</h3>
          <ListGroup>
            <ListGroup.Item className="skill-item">HTML</ListGroup.Item>
            <ListGroup.Item className="skill-item">CSS (Bootstrap, Tailwind)</ListGroup.Item>
            <ListGroup.Item className="skill-item">JavaScript (ES6+)</ListGroup.Item>
            <ListGroup.Item className="skill-item">React</ListGroup.Item>
            <ListGroup.Item className="skill-item">Node.js</ListGroup.Item>
            <ListGroup.Item className="skill-item">Express</ListGroup.Item>
            <ListGroup.Item className="skill-item">MongoDB</ListGroup.Item>
          </ListGroup>
        </Container>
      </main>
      <footer className="footer-custom py-4 mt-5">
        <Container>
          <div className="text-center">
            <p>Connect with me:</p>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/AshleydVon" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:AshleydVon630@gmail.com">Email: AshleydVon630@gmail.com</a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Resume;