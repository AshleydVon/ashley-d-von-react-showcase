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


          <div className="proficiencies-section">
  <h3 className="section-title mt-4">Proficiencies</h3>
  
  <div className="proficiency-category">
    <h4>Technical Skills</h4>
    <ListGroup>
      <ListGroup.Item className="skill-item">React/Redux Development</ListGroup.Item>
      <ListGroup.Item className="skill-item">Full Stack MERN Applications</ListGroup.Item>
      <ListGroup.Item className="skill-item">RESTful API Architecture</ListGroup.Item>
      <ListGroup.Item className="skill-item">GraphQL/Apollo Integration</ListGroup.Item>
      <ListGroup.Item className="skill-item">Database Design & Management</ListGroup.Item>
      <ListGroup.Item className="skill-item">Authentication Systems</ListGroup.Item>
      <ListGroup.Item className="skill-item">Responsive Web Design</ListGroup.Item>
      <ListGroup.Item className="skill-item">Progressive Web Apps</ListGroup.Item>
      <ListGroup.Item className="skill-item">Version Control/Git</ListGroup.Item>
      <ListGroup.Item className="skill-item">CI/CD Implementation</ListGroup.Item>
      <ListGroup.Item className="skill-item">Cloud Deployment</ListGroup.Item>
      <ListGroup.Item className="skill-item">Testing & Debugging</ListGroup.Item>
      <ListGroup.Item className="skill-item">Performance Optimization</ListGroup.Item>
      <ListGroup.Item className="skill-item">Security Best Practices</ListGroup.Item>
    </ListGroup>
  </div>

  <div className="proficiency-category">
    <h4>Professional Skills</h4>
    <ListGroup>
      <ListGroup.Item className="skill-item">Project Architecture</ListGroup.Item>
      <ListGroup.Item className="skill-item">Technical Documentation</ListGroup.Item>
      <ListGroup.Item className="skill-item">Agile Development</ListGroup.Item>
      <ListGroup.Item className="skill-item">Problem-Solving</ListGroup.Item>
      <ListGroup.Item className="skill-item">Code Review</ListGroup.Item>
      <ListGroup.Item className="skill-item">Team Collaboration</ListGroup.Item>
      <ListGroup.Item className="skill-item">Operations Management</ListGroup.Item>
      <ListGroup.Item className="skill-item">Direct Team Management & Supervision</ListGroup.Item>
<ListGroup.Item className="skill-item">Strategic Planning</ListGroup.Item>
      <ListGroup.Item className="skill-item">Quality Assurance</ListGroup.Item>
      <ListGroup.Item className="skill-item">Resource Optimization</ListGroup.Item>
      <ListGroup.Item className="skill-item">Client Relations</ListGroup.Item>
      <ListGroup.Item className="skill-item">Continuous Learning</ListGroup.Item>
      <ListGroup.Item className="skill-item">Innovation Focus</ListGroup.Item>
    </ListGroup>
  </div>
</div>


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
