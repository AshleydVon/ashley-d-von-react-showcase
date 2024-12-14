import React from 'react';
import { Container, ListGroup, Button, Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import columbiaCertificate from '../assets/images/Columbia_University_Full_Stack_Certificate.png';
import courseraCertificate from '../assets/images/Coursera_Introduction_to_Mobile_App_Development_Certificate.png';

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
              <Nav.Link href="/" className="nav-button">Home</Nav.Link>
              <Nav.Link href="/projects" className="nav-button">Projects</Nav.Link>
              <Nav.Link href="/skills" className="nav-button">Skills</Nav.Link>
              <Nav.Link href="/contact" className="nav-button">Contact</Nav.Link>
              <Nav.Link href="/resume" className="nav-button">Resume</Nav.Link>
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
              marginBottom: '2rem',
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

          {/* Certificates Section */}
          <div className="certificate-section mt-5">
            <h3 className="section-title">Certificates</h3>
            <div className="certificate-container">
              {/* Columbia Certificate */}
              <div className="certificate-card">
                <img
                  src={columbiaCertificate}
                  alt="Columbia University Full-Stack Certificate"
                  className="certificate-img"
                />
                <h4 className="certificate-title">Columbia University Full-Stack Bootcamp</h4>
                <p className="certificate-description">
                  Successfully completed a full-stack web development bootcamp.
                </p>
              </div>
              {/* Coursera Certificate */}
              <div className="certificate-card">
                <img
                  src={courseraCertificate}
                  alt="Coursera Mobile App Development Certificate"
                  className="certificate-img"
                />
                <h4 className="certificate-title">Coursera Introduction to Mobile App Development</h4>
                <p className="certificate-description">
                  Completed the course with 100%, showcasing foundational mobile development skills.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <footer className="footer-custom py-4 mt-5">
        <Container>
          <div className="text-center">
            <p>Connect with me:</p>
            <ul className="social-links">
              <li>
                <a href="https://github.com/AshleydVon" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:AshleydVon630@gmail.com">
                  <MdEmail className="social-icon" /> Email: AshleydVon630@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Resume;
