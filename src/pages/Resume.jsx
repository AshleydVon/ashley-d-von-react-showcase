import React from 'react';
import { Container, ListGroup, Button, Navbar, Nav } from 'react-bootstrap';

function Resume() {
  const openResume = () => {
    // This will open the PDF in a new tab
    window.open('/Profile-2.pdf', '_blank');
  };

  return (
    <div className="resume">
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

      <Container className="mt-5">
        <h2>My Resume</h2>
        <p>View my resume here:</p>
        <Button onClick={openResume} variant="primary">
          View Resume
        </Button>
        <h3 className="mt-4">Proficiencies</h3>
        <ListGroup>
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS (Bootstrap, Tailwind)</ListGroup.Item>
          <ListGroup.Item>JavaScript (ES6+)</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>Express</ListGroup.Item>
          <ListGroup.Item>MongoDB</ListGroup.Item>
        </ListGroup>
      </Container>

      <footer className="footer-custom py-4 mt-5">
        <Container>
          <div className="text-center">
            <p>Connect with me:</p>
            <ul className="list-unstyled">
              <li><a href="https://github.com/AshleydVon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:AshleydVon630@gmail.com">Email: AshleydVon630@gmail.com</a></li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Resume;
